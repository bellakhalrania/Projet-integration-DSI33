// Charger les modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
//import euraka
import { Eureka } from 'eureka-js-client';

// Importer les routes
import userRoute from './routers/user.router.js';
import taskRoute from './routers/tasks.router.js';

// Charger les variables d'environnement
dotenv.config();
const app = express();

// Middleware CORS (Place it before the routes)


 // Ensure this is before your routes


// Middleware pour traiter les requêtes JSON et URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eurekaClient :
const eurekaClient = new Eureka({
  instance: {
    app: 'gateway-service',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      '$': 3000,
      '@enabled': true,
    },
    vipAddress: 'gateway-service',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    secure: false,
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  },
});

// Démarrage du client Eureka et enregistrement du service
eurekaClient.start((error, response) => {
  if (error) {
    console.error('Error registering with Eureka:', error);
    if (response) {
      console.error('Response body:', JSON.stringify(response.body, null, 2)); // Affiche la réponse JSON complète
    } else {
      console.error('No response body received.');
    }
  } else {
    console.log('Service registered with Eureka successfully!');
  }
});

//routes (Place routes after CORS middleware)
app.use('/api', userRoute);
app.use('/api/tasks', taskRoute);

// Connexion à MongoDB
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Mentalhealth_db';
mongoose
  .connect(DB_URI)
  .then(() => console.log('Connected to MentalHealth_db'))
  .catch((error) => console.error('Database connection error:', error));

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
