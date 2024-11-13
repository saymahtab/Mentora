const disposableDomains = require('disposable-email-domains');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { generateTokenAndSetCookie } = require("../lib/utils/generateTokenAndSetCookie");
const User = require('../models/User/user.model'); 

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if all required fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid Email Format" });
        }

        // Ensure email is not disposable
        const emailDomain = email.split('@')[1];
        if (disposableDomains.includes(emailDomain)) {
            return res.status(400).json({ error: "Temporary email addresses are not allowed" });
        }

        // Validate password strength
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        if (!strongPasswordRegex.test(password)) {
            return res.status(400).json({
                error: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
            });
        }

        // Check if email is already in use
        const existingEmail = await User.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } });
        if (existingEmail) {
            return res.status(400).json({ error: "Email is already taken" });
        }

        // Generate a unique username
        const baseUsername = email.substring(0, 6).toLowerCase();
        let userName;
        let isUnique = false;

        while (!isUnique) {
            const randomNum = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit number
            userName = `${baseUsername}${randomNum}`;

            const existingUserName = await User.findOne({ userName });
            if (!existingUserName) {
                isUnique = true;
            }
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            email: validator.normalizeEmail(email),
            password: hashedPassword,
            userName,
            profileImg: "",  
            coverImg: "",  
        });

        await newUser.save();
        generateTokenAndSetCookie(newUser._id, res);

        return res.status(201).json({
            _id: newUser._id,
            userName: newUser.userName,
            email: newUser.email,
        });
    } catch (error) {
        console.error("Error in signup controller:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};



const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Check if both identifier (username, email, or phone number) and password are provided
        if (!userName || !password) {
            return res.status(400).json({ error: "Username/email/phone number and password are required" });
        }

        // Case-insensitive search for user by username, email, or mobile
        const user = await User.findOne({
            $or: [
                { userName: { $regex: new RegExp("^" + userName + "$", "i") } },
                { email: { $regex: new RegExp("^" + userName + "$", "i") } },
                { mobile: userName }  // Assumes exact match for mobile number
            ],
        });

        // Check if user exists and password is correct
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(404).json({ error: "Invalid username/email/phone number or password" });
        }

        // Generate JWT token and set it in cookie
        generateTokenAndSetCookie(user._id, res);

        // Send user data as response
        res.status(200).json({
            _id: user._id,
            userName: user.userName,
            email: user.email,
            mobile: user.mobile,
            profileImg: user.profileImg,
            coverImg: user.coverImg,
        });
    } catch (err) {
        console.error("Error in login controller:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const logout = (req, res) => {
    try {
        res.cookie('jwt', "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.error("Error in logout controller:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json(user);
    } catch (err) {
        console.error("Error in getMe controller:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    signup,
    login,
    logout,
    getMe,
};
