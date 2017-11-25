const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const {DATABASE_URL, PORT} = require('./config');
const app = express();
app.use(express.static('Public'));
app.use(bodyParser.json());
const authenticationRouter = require("./authentication/authenticationRouter");
app.use("/authentication", authenticationRouter);
const journalRouter = require("./Journal/journalRouter");
app.use("/journal", journalRouter);
const accountRouter = require("./Account/accountRouter");
app.use("/account", accountRouter);
const browserRouter = require("./Browser/browserRouter");
app.use("/browser", browserRouter);
app.use(morgan('common'));

const jsonParser = bodyParser.json();



mongoose.Promise = global.Promise;




let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
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