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

app.post('/decrypt-atbash', urlencodedParser, asyncRoute(routes.decryptAtbash));
app.post('/decrypt-running', urlencodedParser, asyncRoute(routes.decryptRunning));


app.listen(3000);

