const { urlencoded } = require('body-parser');
const express = require('express');
const expressLaytouts = require('express-ejs-layouts');
const app = express();

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({ extended: true }));
app.use(expressLaytouts);
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);