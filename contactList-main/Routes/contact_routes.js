const express = require("express")
const router = express.Router()
const {getContactById, addContact, getContacts, deleteContact, updateContact} = require("../Controllers/contact_controller")

    router.get("/getContactById/:id", getContactById)

    router.post("/addContact", addContact)

    router.get("/getContacts", getContacts)

    router.delete("/deleteContact/:id", deleteContact)

    router.put("/updateContact/:id", updateContact)


module.exports = router
