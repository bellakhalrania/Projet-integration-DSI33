import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Configuration
const privateKey = "this is rania";
const dbUrl = 'mongodb://localhost:27017/Mentalhealth_db';

// Schéma utilisateur
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Middleware pour hacher le mot de passe
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Modèle
const User = mongoose.model('User', userSchema);

// Fonction d'inscription
export async function register(username, email, password) {
    await mongoose.connect(dbUrl);

    // Vérifier si l'email existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Cet email existe déjà.');
    }

    // Créer et sauvegarder l'utilisateur
    const newUser = new User({ username, email, password });
    await newUser.save();

    mongoose.disconnect();
    return newUser;
};



// Fonction de connexion
export async function login(email, password) {
    await mongoose.connect(dbUrl);

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Email ou mot de passe invalide.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Email ou mot de passe invalide.');
    }

    const token = jwt.sign({ id: user._id, username: user.username }, privateKey, { expiresIn: '1h' });

    mongoose.disconnect();
    return token;
}
