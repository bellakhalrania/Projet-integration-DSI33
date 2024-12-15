import Task from '../models/task.model.js';

// Get all tasks
export const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        console.log('Tasks retrieved:', tasks); 
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
};

// Add a new task
export const addTask = async (req, res, next) => {
    try {
        // Créer une nouvelle instance de Task et la sauvegarder
        const newTask = new Task({
            name: req.body.name,
            startDate: req.body.startDate,
            startTime: req.body.startTime,
            completed: req.body.completed || false,
        });
        console.log('New task added:', newTask);
        const savedTask = await newTask.save();
        res.status(201).json({message: 'Task added successfully', task: savedTask});
    } catch (err) {
        next(err);
    }
};

// Update a task
export const updateTask = async (req, res, next) => {
    try {
        // Mettre à jour la tâche
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        next(err);
    }
};

// Delete a task
export const deleteTask = async (req, res, next) => {
    try {
        // Supprimer la tâche
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (err) {
        next(err);
    }
};

// Mark task as completed
export const completedtask = async (req, res, next) => {
    try {
        const completedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { completed: true },
            { new: true }
        );
        if (!completedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(completedTask);
    } catch (err) {
        next(err);
    }
};

export default { getAllTasks, addTask, updateTask, deleteTask, completedtask };