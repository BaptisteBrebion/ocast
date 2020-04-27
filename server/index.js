// les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const path = require('path');
// express
const express = require("express");
const app = express();

// const cors = require('cors');
// app.use(cors('*'));
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "http://localhost:8080");
  response.header("Access-Control-Allow-Credentials", true);
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept: "
  );
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  next();
});

app.use(express.static(path.join(__dirname, 'uploads')));

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Gestionnaire de session
const DBConnection = require("./app/dbConnection");
const session = require("express-session");
// initalize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    // si connexion SSL en dehors de node.
    proxy: true,
    secret: "mot de passe crypté",
    store: new SequelizeStore({
      db: DBConnection,
      checkExpirationInterval: 15 * 60 * 1000, // Intervalle de nettoyage des sessions expirées en millisecondes
      expiration: 24 * 60 * 60 * 1000 // durée de validité d'une session (en ms) (ici 1 jour: 24h X 60sec X 60min X1000(pour convertir en ms))
    })
  })
);
DBConnection.sync();

// Routage
const router = require("./app/router");
app.use(router);

// lancement du serveur
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
