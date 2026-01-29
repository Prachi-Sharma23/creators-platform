dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";

// Load env variables
dotenv.config();

// Connect database
connectDB();

// Create express app FIRST
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (import AFTER app exists)
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
