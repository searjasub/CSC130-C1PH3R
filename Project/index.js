const express = require('express');
const path = require('path');
const pug = require('pug');
const routes = require('./routes/routes.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieParser('We like cookies'));

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

const asyncRoute = route => (req, res, next = console.error) =>
    Promise.resolve(route(req, res)).catch(next);

app.get('/', asyncRoute(routes.home));
app.get('/game', asyncRoute(routes.game));
app.get('/ciphers', asyncRoute(routes.ciphers));
app.get('/atbash', asyncRoute(routes.atbash));

app.listen(3000);

