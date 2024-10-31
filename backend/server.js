const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const { connectMongoDB } = require('./config/connectMongoDB');
const { authRoutes } = require('./routes/auth.route');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB();
})