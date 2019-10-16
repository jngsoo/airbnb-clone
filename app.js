const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
var passport = require('passport');
const secret = require('./secret')

const sequelize = require('./models').sequelize;

const app = express();

// sequelize.sync({force: false}); // Put {force : true} to force change db

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);


// const NaverStrategy = require('passport-naver').Strategy;

// passport.use(new NaverStrategy({
//         clientID: secret.naver_oauth_client_id,
//         clientSecret: secret.naver_oauth_client_secret,
//         callbackURL: secret.naver_oauth_callback_url
//     },
//     function(accessToken, refreshToken, profile, done) {
//         User.findOne({
//             'naver.id': profile.id
//         }, function(err, user) {
//             if (!user) {
//                 user = new User({
//                     name: profile.displayName,
//                     email: profile.emails[0].value,
//                     username: profile.displayName,
//                     provider: 'naver',
//                     naver: profile._json
//                 });
//                 user.save(function(err) {
//                     if (err) console.log(err);
//                     return done(err, user);
//                 });
//             } else {
//                 return done(err, user);
//             }
//         });
//     }
// ));

// app.route('/auth/naver')
//     .get(passport.authenticate('naver', {
//         failureRedirect: '/fail'
// }), function(req, res, next) {
//     res.send('sandwich')
// });

// // creates an account if no account of the new user
// app.route('/auth/naver/callback')
//     .get(passport.authenticate('naver', {
//         failureRedirect: '#!/auth/login'
//     }), function(req, res, next) {
//         res.send('??')
// });

module.exports = app
