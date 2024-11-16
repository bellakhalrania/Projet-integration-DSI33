const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Clé privée pour signer les tokens
const privateKey = "this is rania";
const dbUrl = 'mongodb://localhost:27017/Mentalhealth_db';

// Inscription d'un utilisateur
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await mongoose.connect(dbUrl);

        // Vérifier si l'email existe déjà
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email existe déjà.' });
        }

        // Créer et sauvegarder un nouvel utilisateur
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur inscrit avec succès.', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l’inscription.', error: err.message });
    } finally {
        mongoose.disconnect();
    }
};

// Connexion d'un utilisateur
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        await mongoose.connect(dbUrl);

        // Trouver l'utilisateur par email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe invalide.' });
        }

        // Vérifier le mot de passe
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Email ou mot de passe invalide.' });
        }

        // Générer un token JWT
        const token = jwt.sign(
            { id: user._id, username: user.username },
            privateKey,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Connexion réussie.', token });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la connexion.', error: err.message });
    } finally {
        mongoose.disconnect();
    }
};
