import express, { json } from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.status(200).send("Test succccess senpai 🔥");
});

app.post("/api/test", (res, req) => {
  res.status(201).json({ message: "Post created successfully" });
});

app.put("/api/test/:id", (res, req) => {
  res.status(200).json({ message: "Post updated successfully" });
});
app.post("/api/test/:id", (res, req) => {
  res.status(200).json({ message: "Post deleted successfully" });
});
app.listen(5001, () => {
  console.log("Port is successfully activated");
});
