const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const {DATABASE_URL, PORT} = require('./config');
//const {astroItem} = require('./models');
const app = express();
//const skyRouter = require('./skyRouter');
app.use(express.static('public'));
const authenticationRouter = require("./authentication/authenticationRouter");
app.use("/authentication", authenticationRouter);
const journalRouter = require("./Journal/journalRouter");
app.use("/journal", journalRouter);
const accountRouter = require("./Account/accountRouter");
app.use("/account", accountRouter);
const browserRouter = require("./Browser/browserRouter");
app.use("/browser", browserRouter);
const itemModelRouter = require("./Item-Model/itemModelRouter");
app.use("/itemModel", itemModelRouter);
//require('dotenv').config();

const morgan = require('morgan');
//const passport = require('passport');
//const {router: usersRouter} = require('./users');
//const {router: authRouter, basicStrategy, jwtStrategy} = require('./auth');

mongoose.Promise = global.Promise;

app.use(morgan('common'));

/*app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

app.use(passport.initialize());
passport.use(basicStrategy);
passport.use(jwtStrategy);

app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);

app.get(
    '/api/protected',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        return res.json({
          
        });
    }
);

app.use('*', (req, res) => {
    return res.status(404).json({message: 'Not Found'});
});*/

let server;

function runServer() {
    return new Promise((resolve, reject) => {
        /*mongoose.connect(DATABASE_URL, err => {
            if (err) {
                return reject(err);
            }

        });*/
                    server = app
                .listen(PORT, () => {
                    console.log(`Your app is listening on port ${PORT}`);
                    resolve();
                })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}
if (require.main === module) {
    runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};



