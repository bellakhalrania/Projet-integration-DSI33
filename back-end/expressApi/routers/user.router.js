import { register, login } from '../models/user.model.js';
import { Router } from 'express';

const route = Router();

// Route d'enregistrement
route.post('/register', async (req, res, next) => {
  try {
    const user = await register(req.body.username, req.body.email, req.body.password);
    res.status(200).json({ user, msg: "Utilisateur ajouté avec succès !" });
  } catch (err) {
    next(err);
  }
});

// Route de connexion
route.post('/login', async (req, res, next) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
});

// Exporter les routes
export default route;
