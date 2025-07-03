import express from "express";
import postRoutes from "./routes/postRoutes.js"
import { connectToDb } from "./config/db.js";
import dotenv from "dotenv"


const app = express();
dotenv.config()

const PORT = process.env.PORT || 5001

connectToDb()

app.use(express.json())

app.use("/api/notes", postRoutes)

app.listen(PORT, () => {
  console.log("Port is successfully activated", PORT);
});


