const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    address: req.body.address,
    profile: req.body.profile,
    education: req.body.education,
    img: req.body.img
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateMany(
      { _id: req.params.postId },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          profile: req.body.profile,
          education: req.body.education
        }
      }
    );
    req.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
