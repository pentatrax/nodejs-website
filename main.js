if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const { urlencoded } = require('body-parser');
const express = require('express');
const expressLaytouts = require('express-ejs-layouts');
const app = express();

const indexRouter = require('./routes/index');
const communityRouter = require('./routes/community');

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.set('views', __dirname + "/views");

app.use(express.urlencoded({ extended: true }));
app.use(expressLaytouts);
app.use(express.static(__dirname + "/public"));


app.use('/', indexRouter);
app.use('/community', communityRouter);

app.listen(process.env.PORT || 3000);