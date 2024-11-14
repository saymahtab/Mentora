// controllers/notification.controller.js
const { Notification } = require("../models/notification.model");

const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ to: req.user._id })
            .populate("from", "userName profileImg");

        await Notification.updateMany({ to: req.user._id }, { read: true });
        res.status(200).json(notifications);
    } catch (err) {
        console.error("Error in getNotifications:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteNotifications = async (req, res) => {
    try {
        await Notification.deleteMany({ to: req.user._id });
        res.status(200).json({ message: "Notifications deleted" });
    } catch (err) {
        console.error("Error in deleteNotifications:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getNotifications, deleteNotifications };
