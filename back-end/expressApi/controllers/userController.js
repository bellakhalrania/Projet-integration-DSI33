// controllers/userController.js
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const privateKey = "this is rania";

// Function to register a new user
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email existe déjà.' });
        }

        // Create and save the user
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur créé avec succès.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur du serveur.' });
    }
};

// Function to log in a user
export const login = async (req, res) => {
    const { emailORusername, password } = req.body; // Use "identifier" for email or username

    try {
        // Find the user by email or username
        const user = await User.findOne({
            $or: [{ email: emailORusername }, { username: emailORusername }]
        });
        
        if (!user) {
            return res.status(400).json({ message: 'Email ou nom d\'utilisateur invalide.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Email ou mot de passe invalide.' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, privateKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Erreur du serveur.' });
    }
};