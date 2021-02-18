import express, { Router } from 'express';

import {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers); //finds all users
router.post('/', createUser); //creates a user
router.get('/:id', getUserById); //finds a user by id
router.delete('/:id', deleteUser); //delete a user by id
router.patch('/:id', updateUser); //update a user by id

export default router;
