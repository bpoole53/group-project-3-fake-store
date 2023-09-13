

const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller');

// POST Create a new user
router.post('/', userController.createUser);

// POST Authenticate a user
router.post('/auth', userController.authUser);

// GET Verify user authentication
router.post('/verify', userController.verifyUser);

// PUT Update a user by ID
router.put('/:id', userController.updateUserById);

// GET all users
router.get('/', userController.getAllUsers);

// DELETE a user by ID
router.delete('/:id', userController.deleteUserById);

// GET a single user by ID
router.get('/:id', userController.getUserById);

module.exports = router;