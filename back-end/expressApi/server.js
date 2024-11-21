const express = require('express');
const userRoute=require('./routers/user.router')

const cors = require('cors');
const app = express();

// Middleware de gestion des CORS
app.use(cors());


// Middleware de traitement des requêtes JSON et URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',userRoute)

// Démarrage du serveur
app.listen(3000, () => console.log('Server running on port 3000'));
