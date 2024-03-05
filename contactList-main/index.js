const express = require("express")
require('dotenv').config()
const app = express()
const ConnectDB = require("./Config/ConnectDB")
const contact_router = require("./Routes/contact_routes")
app.use(express.json())
app.use("/contacts", contact_router)

ConnectDB()



app.listen(process.env.port, (err)=> {
    err? console.error(err): console.log("server is running on port 5000")
})