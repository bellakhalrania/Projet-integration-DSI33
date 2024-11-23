const express = require('express');
const userRoute=require('./routers/user.router')
const FacebookStrategy = require('passport-facebook').Strategy;
const cors = require('cors');
const app = express();
const port=3000;
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

// Facebook App Credentials

const FACEBOOK_APP_ID = '27582519001394081';
const FACEBOOK_APP_SECRET = '6c0ea8fc60bfd96ccb43418d810e3de1';



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
//facebook login

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport serialize/deserialize
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Facebook Strategy
passport.use(new FacebookStrategy(
    {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: 'http://localhost:5000/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email'] // Request desired fields
    },
    (accessToken, refreshToken, profile, done) => {
        // Process user info here or save in DB
        return done(null, profile);
    }
));

// Facebook Authentication Routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        // Redirect to Angular with user data
        res.redirect(`http://localhost:4200/client/acceuil?user=${encodeURIComponent(JSON.stringify(req.user))}`);
    }
);

// Test Route
app.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).send('Not Authenticated');
    }
});
// Démarrage du serveur
app.listen( port, () => console.log('Server running on port 3000'));
