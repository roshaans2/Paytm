const express = require("express")
const rootRouter = require("./routes/index")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1",rootRouter)


app.listen(3000,()=>{
    console.log("Server running at port 3000")
})