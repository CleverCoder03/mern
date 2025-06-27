import express from "express";
import postRoutes from "./routes/postRoutes.js"

const app = express();

app.use("/api/test", postRoutes)

app.listen(5001, () => {
  console.log("Port is successfully activated");
});
