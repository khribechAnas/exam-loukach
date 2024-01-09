const Media = require('../models/mediaModel');

class MediaController {
  async createMedia(req, res) {
    try {
      const { title, description, fileType, filePath, uploadedBy } = req.body;

      const newMedia = new Media({
        title,
        description,
        fileType,
        filePath,
        uploadedBy,
      });

      const savedMedia = await newMedia.save();
      res.status(201).json(savedMedia);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllMedia(req, res) {
    try {
      const mediaItems = await Media.find();
      res.status(200).json(mediaItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getMediaById(req, res) {
    try {
      const { mediaId } = req.params;
      const mediaItem = await Media.findById(mediaId);

      if (!mediaItem) {
        return res.status(404).json({ error: 'Media item not found' });
      }

      res.status(200).json(mediaItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateMedia(req, res) {
    try {
      const { mediaId } = req.params;
      const updatedMedia = await Media.findByIdAndUpdate(
        mediaId,
        req.body,
        { new: true }
      );

      if (!updatedMedia) {
        return res.status(404).json({ error: 'Media item not found' });
      }

      res.status(200).json(updatedMedia);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteMedia(req, res) {
    try {
      const { mediaId } = req.params;
      const removedMedia = await Media.findByIdAndDelete(mediaId);

      if (!removedMedia) {
        return res.status(404).json({ error: 'Media item not found' });
      }

      res.status(200).json({ message: 'Media item removed successfully', removedMedia });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = MediaController;
