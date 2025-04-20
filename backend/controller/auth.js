const express = require("express");
const mongoose = require("mongoose");
const Router = express.Router();

// User Model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("admin", userSchema, "admins");

// Login Route
Router.get("/login/:email", async (req, res) => {
    const { email } = req.params;

    try {
        // Check if the user exists
        const user = await UserModel.find({email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with success
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = Router;