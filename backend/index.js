const express = require("express")
const rootRouter = require("./routes/index")

const app = express()

app.route("/api/v1",rootRouter)

app.listen(8000,()=>{
    console.log("Server running at port 8000")
})