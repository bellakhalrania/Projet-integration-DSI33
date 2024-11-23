import express from 'express';
import { createGroup, getGroups, getGroupById, updateGroup, deleteGroup } 
from '../controllers/groupController.js';
const router = express.Router();
// Route for creating a new Group
router.post('/', createGroup);
// Route for fetching all Groups
router.get('/', getGroups);
// Route for fetching an Group by ID
router.get('/:id', getGroupById);
// Route for updating an Group by ID
router.put('/:id', updateGroup);
// Route for deleting an Group by ID
router.delete('/:id', deleteGroup);
export default router;