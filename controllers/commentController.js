const Comment = require('../models/commentModel');

class CommentController {
  async createComment(req, res) {
    try {
      const { user, content, post } = req.body;

      const newComment = new Comment({
        user,
        content,
        post,
      });

      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllComments(req, res) {
    try {
      const comments = await Comment.find();
      res.status(200).json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getCommentById(req, res) {
    try {
      const { commentId } = req.params;
      const comment = await Comment.findById(commentId);

      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      res.status(200).json(comment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateComment(req, res) {
    try {
      const { commentId } = req.params;
      const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        req.body,
        { new: true }
      );

      if (!updatedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      res.status(200).json(updatedComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteComment(req, res) {
    try {
      const { commentId } = req.params;
      const removedComment = await Comment.findByIdAndDelete(commentId);

      if (!removedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      res.status(200).json({ message: 'Comment removed successfully', removedComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CommentController;
