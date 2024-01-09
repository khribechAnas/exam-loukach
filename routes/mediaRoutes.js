const express = require('express');
const router = express.Router();
const MediaController = require('../controllers/mediaController.js');

const mediaController = new MediaController();

router.post('/media', mediaController.createMedia);
router.get('/media', mediaController.getAllMedia);
router.get('/media/:mediaId', mediaController.getMediaById);
router.patch('/media/:mediaId', mediaController.updateMedia);
router.delete('/media/:mediaId', mediaController.deleteMedia);

module.exports = router;
