const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true

    },
    lasttname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    gender: {
        type: String,
        required: true

    },
    phno: {
        type: Number,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true

    },
    confirmpassword: {
        type: String,
        required: true

    }
})

// create collection

const Register = new mongoose.model("Register", empSchema);

module.exports = Register;