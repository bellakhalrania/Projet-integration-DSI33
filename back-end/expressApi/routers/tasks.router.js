import express from 'express';
import { getAllTasks, addTask, updateTask, deleteTask, completedtask } from '../controllers/taskController.js';
//import { verifyUser } from '../middleware/authMiddleware.js';

const router = express.Router();
// Get all tasks
router.get('/getAllTasks',  getAllTasks);
// Add a new task
router.post('/addTask',  addTask);
// Get a single task
//router.get('/:id', getTask);
// Update a task
router.put('/updateTask/:id', updateTask);
// Delete a task
router.delete('/deleteTask/:id',  deleteTask);
// Completed a task
router.put('/completed/:id', completedtask);

export default router;