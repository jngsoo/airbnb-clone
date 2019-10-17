const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./models').sequelize

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const passport = require('./config/passport');

const app = express();

// sequelize.sync({force: false}); // Put {force : true} to force change db

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

module.exports = app
