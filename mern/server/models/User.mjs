const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, enum: ['donor', 'recipient', 'volunteer'], required: true },
    // Additional fields based on user type
    organizationName: String,
    contactPerson: String,
    location: String,
    fullName: String,
    availability: String,
    // Common fields
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
