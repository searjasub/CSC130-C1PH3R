const express = require('express');
const path = require('path');
const pug = require('pug');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

const asyncRoute = route => (req, res, next = console.error) =>
    Promise.resolve(route(req, res)).catch(next);

app.get('/', asyncRoute(routes.home));
app.get('/game', asyncRoute(routes.game));
app.get('/ciphers', asyncRoute(routes.ciphers));
app.get('/atbash', asyncRoute(routes.atbash));
app.get('/caesar', asyncRoute(routes.caesar));
app.get('/runningkey', asyncRoute(routes.runningkey));
app.get('/playfair', asyncRoute(routes.playFair));

app.post('/encrypt-atbash', urlencodedParser, asyncRoute(routes.encryptAtbash));
app.post('/decrypt-atbash', urlencodedParser, asyncRoute(routes.decryptAtbash));
app.post('/encrypt-caesar', urlencodedParser, asyncRoute(routes.encryptCaesar));
app.post('/decrypt-caesar', urlencodedParser, asyncRoute(routes.decryptCaesar));

app.post('/encrypt-running', urlencodedParser, asyncRoute(routes.encryptRunning));
app.post('/decrypt-running', urlencodedParser, asyncRoute(routes.decryptRunning));

app.post('/encrypt-playfair', urlencodedParser, asyncRoute(routes.encryptPlayfair));
app.post('/decrypt-playfair', urlencodedParser, asyncRoute(routes.decryptPlayfair));

app.listen(3000);