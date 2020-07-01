const express = require('express');
const router = new express.Router();

const posts = ['Post 1', 'Post 2'];

/** GET /api:
 * Get all posts from the post list
 */

router.get('/', (req, res) => res.status(200).json({ posts }));

/** POST /api
 * Add a post to the post list
 */

router.post('/', (req, res) => {
  if (req.body.post) posts.unshift(req.body.post);
  return res.status(201).json({ post: req.body.post });
});

module.exports = router;
