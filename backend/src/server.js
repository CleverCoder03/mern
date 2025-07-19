import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import { connectToDb } from "./config/db.js";
import postRoutes from "./routes/postRoutes.js"
import rateLimiter from "./middleware/rateLimiter.js";


const app = express();
dotenv.config()

const PORT = process.env.PORT || 5001

connectToDb()

app.use(express.json())
app.use(cors())
app.use(rateLimiter)

app.use("/api/notes", postRoutes)

app.listen(PORT, () => {
  console.log("Port is successfully activated", PORT);
});


