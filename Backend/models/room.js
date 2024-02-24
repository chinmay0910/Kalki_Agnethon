const mongoose = require('mongoose')
const { Schema } = mongoose;

const RoomSchema = new Schema({
    roomNumber: { type: String, required: true },
    booked: { type: Boolean, default: false },
    allocatedTo: { type: String, default: "" },
    bookedAt: { type: Date, default: "" },
});

module.exports = mongoose.model("rooms", RoomSchema);