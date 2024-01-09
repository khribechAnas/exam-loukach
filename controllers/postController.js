const Post = require('../models/postModel');

class PostController {
  async createPost(req, res) {
    try {
      const { title, content, author } = req.body;

      const newPost = new Post({
        title,
        content,
        author,
      });

      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getPostById(req, res) {
    try {
      const { postId } = req.params;
      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updatePost(req, res) {
    try {
      const { postId } = req.params;
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        req.body,
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deletePost(req, res) {
    try {
      const { postId } = req.params;
      const removedPost = await Post.findByIdAndDelete(postId);

      if (!removedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }

      res.status(200).json({ message: 'Post removed successfully', removedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = PostController;
