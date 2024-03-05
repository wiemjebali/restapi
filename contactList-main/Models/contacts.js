const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    birthdate: {
        type: Number
    }
})

const Contact = mongoose.model("Contact", contactSchema)
module.exports = Contact