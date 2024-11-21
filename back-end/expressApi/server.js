const express = require('express');
const userRoute=require('./routers/user.router')

const cors = require('cors');
const app = express();

const port=3000;

// Middleware de gestion des CORS
app.use(cors());


// Middleware de traitement des requêtes JSON et URL encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',userRoute)
//login with google 
app.post('/api/login',(req,res)=>{
    console.log(req.body);
    res.redirect('http://localhost:4200/client/acceuil')
})
// Démarrage du serveur
app.listen( port, () => console.log('Server running on port 3000'));
