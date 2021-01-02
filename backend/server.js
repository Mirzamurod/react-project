import express from 'express'
import dotenv from 'dotenv'
// import path from 'path'
import colors from 'colors'
import passport from 'passport'
import expressValidator from 'express-validator'
import connectDB from './helpers/db.js'
// import authRouter from './routes/auth.js'

dotenv.config()

connectDB()

const app = express()

import users from './routes/users.js'
app.use('/', users)

app.use(passport.session())

// user init
// app.get('*', (req, res, next) => {
//     res.locals.user = req.user || null;
//     next();
// });

// app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.send('Api is running...')
})

// EXPRESS_VALIDATOR
// app.use(
//     expressValidator({
//         errorFormatter: (param, msg, value) => {
//             let namespace = param.split('.'),
//                 root = namespace.shift(),
//                 formParam = root

//             while (namespace.length) {
//                 formParam += '[' + namespace.shift() + ']'
//             }
//             return {
//                 param: formParam,
//                 msg: msg,
//                 value: value,
//             }
//         },
//     })
// )

app.use(passport.initialize())

// app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`.yellow.bold)
})

/*
// EXPRESS_MESSAGES
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// EXPRESS_SESSION
app.use(
    session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true
    })
);


// Passport CF
require('./cf/passport')(passport);

// Passport use
app.use(passport.initialize());

// Bosh Sahifa Routi
app.get('/', (request, response) => {
    Music.find({}, (err, musics) => {
        if (err) {
            console.log(err);
        } else {
            response.render('index', {
                title: 'Musiqalar',
                musics: musics
            });
        }
    });
});
app.listen(3000, () => {
    console.log('Server Ishga Tushdi!!!');
});
*/
