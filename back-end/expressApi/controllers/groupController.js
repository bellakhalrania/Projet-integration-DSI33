import Group from '../models/group.js';

// Create a new group
export const createGroup = async (req, res, next) => {
 try {
 const newGroup = new Group(req.body);
 await newGroup.save();
 res.status(201).json(newGroup);
 } catch (error) {
 next(error);
 }
};
// Get all groups
export const getGroups = async (req, res, next) => {
 try {
 const groups = await Group.find();
 res.json(groups);
 } catch (error) {
 next(error);
 }
};



export const getGroupById = async (req, res, next) => {
    try {
    const group = await Group.findById(req.params.id);
    if (!group) {
    return res.status(404).json({ message: 'Group not found' 
   });
    }
    res.json(group);
    } catch (error) {
    next(error);
    }
   };
   // Update an group by ID
   export const updateGroup = async (req, res, next) => {
    try {
    const updatedGroup = await 
    Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGroup) {
    return res.status(404).json({ message: 'Group not found' 
   });
    }
    res.json(updatedGroup);
    } catch (error) {
    next(error);
    }
   };
   // Delete an group by ID
   export const deleteGroup= async (req, res, next) => {
    try {
    const deletedGroup = await 
    Group.findByIdAndDelete(req.params.id);
    if (!deletedGroup) {
    return res.status(404).json({ message: 'Group not found' 
   });
    }
    res.json({ message: 'Group deleted' });
    } catch (error) {
    next(error);
    }
   };