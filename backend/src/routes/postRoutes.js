import express from "express";
import {
  deletePost,
  getPost,
  postPost,
  putPost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", postPost);
router.put("/:id", putPost);
router.post("/:id", deletePost);

export default router;
