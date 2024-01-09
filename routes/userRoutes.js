
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const AuthController = require('../controllers/authcontroller.js');

const userController = new UserController();
const authController = new AuthController();

// User routes
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
