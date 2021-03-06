const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');

// Array of posts to send to client
const posts = ['Post 1', 'Post 2'];

/** GET /api
 * Returns all posts from the post list
 */

router.get('/', (req, res) => {
  try {
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
});

/** POST /api
 * Adds a post to the post list
 */

router.post('/', (req, res) => {
  try {
    if (!req.body.post) {
      throw new ExpressError(400, 'Post message required!');
    }

    posts.unshift(req.body.post);
    return res.status(201).json({ post: req.body.post });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
});

module.exports = router;
