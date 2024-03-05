const contactModel = require("../Models/contacts")


exports.getContactById = async(req, res) => {
    try {
        let id = req.params.id;
        let result = await contactModel.findById(id)
        res.send({msg: "Contact found", result})
    } catch (err) {
        console.error(err)
    }
}

exports.getContacts = async(req, res) => {
    try {
        let result = await contactModel.find()
        res.send({msg: "Contacts found", result})
    } catch (err) {
        console.error(err)
    }
}

exports.addContact = async(req, res) => {
    try {
        const newContact = {
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            birthdate: req.body.birthdate
        }
        const result = await contactModel.create(newContact)
        res.send({msg: "Contact created", result})

    } catch (err) {
        console.error(err)
    }
}

exports.deleteContact = async(req, res) => {
    try {
        let id = req.params.id;
        const result = await contactModel.deleteOne({_id: id})
        res.send({msg: "Contact deleted", result})
    } catch (err) {
        console.error(err)
    }
}

exports.updateContact = async(req, res) => {
    try {
        let id = req.params.id
        const result = await contactModel.findByIdAndUpdate(id, {$set:{...req.body}}, {new: true})
        res.send({msg: "contact updated", result})
    } catch (err) {
        console.error(err)
    }
}