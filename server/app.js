const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./models').sequelize;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const searchRouter = require('./routes/search');
const roomRouter = require('./routes/room');
const passport = require('./middleware/passport');
const cors = require('cors');
const app = express();

app.use(cors());

// sequelize.sync({force: true}); // Put {force : true} to force change db

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter)
app.use('/room', roomRouter)

module.exports = app
