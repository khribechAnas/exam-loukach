const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryConroller.js');

const categoryController = new CategoryController();

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.patch('/categories/:categoryId', categoryController.updateCategory);
router.delete('/categories/:categoryId', categoryController.deleteCategory);

module.exports = router;
