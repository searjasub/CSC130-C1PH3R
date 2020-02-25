const express = require('express');
const path = require('path');
const pug = require('pug');
const routes = require('./routes/routes.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

const asyncRoute = route => (req, res, next = console.error) =>
    Promise.resolve(route(req, res)).catch(next);

app.get('/', asyncRoute(routes.home));
app.get('/game', asyncRoute(routes.game));
app.get('/ciphers', asyncRoute(routes.ciphers));
app.get('/atbash', asyncRoute(routes.atbash));
app.get('/caesar', asyncRoute(routes.caesar));
app.get('/runningkey', asyncRoute(routes.runningkey));
app.get('/playfair', asyncRoute(routes.playFair));

app.listen(3000);