import express from "express";
import {
  deletePost,
  getPost,
  getPostById,
  postPost,
  putPost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", getPost);
router.get("/:id", getPostById);
router.post("/", postPost);
router.put("/:id", putPost);
router.delete("/:id", deletePost);

export default router;
