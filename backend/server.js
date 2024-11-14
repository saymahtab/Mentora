const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { connectMongoDB } = require('./config/connectMongoDB');

const { authRoutes } = require('./routes/auth.route');
const { userRoutes } = require('./routes/user.route');
const { postRoutes } = require('./routes/post.route');
const { notificationRoutes } = require('./routes/notification.route');

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/notifications', notificationRoutes);  

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB();
})