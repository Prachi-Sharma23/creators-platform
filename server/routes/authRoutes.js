import express from "express";

const router = express.Router();

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    token: "dummy_jwt_token",
    user: {
      id: "123",
      name,
      email,
    },
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email } = req.body;

  res.json({
    token: "dummy_jwt_token",
    user: {
      id: "123",
      email,
    },
  });
});

export default router;
