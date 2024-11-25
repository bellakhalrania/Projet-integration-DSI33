import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
  
// Importer les routes
import userRoute from './routers/user.router.js';
import taskRoute from './routers/tasks.router.js';



// Charger les variables d'environnement
dotenv.config();

const app = express();

// Middleware pour traiter les requêtes JSON et URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connexion à MongoDB
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Mentalhealth_db';
mongoose
  .connect(DB_URI, {
  })
  .then(() => console.log('Connected to MentalHealth_db'))
  .catch((error) => console.error('Database connection error:', error));

//cors ***********
   app.use(cors({    origin: '*', // Allow all origins (for development, be more specific in production) 
   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods 
   allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers}));
   }));


app.use('/', userRoute);
app.use('/tasks', taskRoute);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
export default app;