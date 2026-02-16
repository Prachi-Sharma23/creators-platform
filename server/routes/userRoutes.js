import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router(); // ✅ THIS MUST COME BEFORE ROUTES

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes
router.get("/", protect, getAllUsers);
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user,
  });
});
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

export default router;
