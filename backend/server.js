import express from "express"

const app = express()

app.get("/api/test", (req, res)=>{
    res.send("test ")
})

app.listen(5001, () => {
    console.log("port is running on 5001")
})