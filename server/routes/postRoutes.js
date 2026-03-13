import express from "express";

const router = express.Router();

// GET posts
router.get("/", (req, res) => {
  res.json({
    success: true,
    posts: [],
  });
});

// CREATE post
router.post("/", (req, res) => {
  const { title, content } = req.body;

  res.status(201).json({
    success: true,
    message: "Post created successfully",
    post: {
      id: "12345",
      title,
      content,
    },
  });
});

// UPDATE post
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  res.json({
    success: true,
    message: "Post updated successfully",
    post: {
      id,
      title,
      content,
    },
  });
});

// DELETE post
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    success: true,
    message: `Post ${id} deleted successfully`,
  });
});

export default router;
