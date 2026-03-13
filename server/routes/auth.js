const express = require("express");
const router = express.Router();

let users = []; // simple in-memory users for testing

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // check missing fields
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // check existing email
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const newUser = { name, email, password };
  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully",
    token: "dummy-token",
    user: { email },
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  res.status(200).json({
    message: "Login successful",
    token: "dummy-token",
  });
});

module.exports = router;
