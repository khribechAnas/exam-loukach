// postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js'); 


router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.patch('/posts/:id', postController.updatePostById);
router.delete('/posts/:id', postController.deletePostById);

module.exports = router;
