const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');

router.post('/comments', commentController.createComment);
router.get('/comments', commentController.getAllComments);
router.get('/comments/:id', commentController.getCommentById);
router.patch('/comments/:id', commentController.updateCommentById);
router.delete('/comments/:id', commentController.deleteCommentById);

module.exports = router;
