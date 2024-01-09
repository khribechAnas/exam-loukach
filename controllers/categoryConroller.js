const Category = require('../models/categoryModel');

class CategoryController {
  async createCategory(req, res) {
    try {
      const { name, description } = req.body;

      const newCategory = new Category({
        name,
        description,
      });

      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllCategories(req, res) {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getCategoryById(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await Category.findById(categoryId);

      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }

      res.status(200).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        req.body,
        { new: true }
      );

      if (!updatedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }

      res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const removedCategory = await Category.findByIdAndDelete(categoryId);

      if (!removedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }

      res.status(200).json({ message: 'Category removed successfully', removedCategory });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CategoryController;
