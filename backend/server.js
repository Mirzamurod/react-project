import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import passport from 'passport'
import expressValidator from 'express-validator'
import bodyParser from 'body-parser'
import connectFlash from 'connect-flash'
import session from 'express-session'
import expressMessages from 'express-messages'
import connectDB from './helpers/db.js'

dotenv.config()

connectDB()

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

import users from './routes/users.js'
app.use('/', users)

app.get('/', (req, res) => {
    res.send('Api is running...')
})

// EXPRESS_MESSAGES
connectFlash();
app.use(function (req, res, next) {
    res.locals.messages = expressMessages(req, res);
    next();
});

// EXPRESS_VALIDATOR
app.use(
    expressValidator({
        errorFormatter: (param, msg, value) => {
            let namespace = param.split('.'),
                root = namespace.shift(),
                formParam = root

            while (namespace.length) {
                formParam += '[' + namespace.shift() + ']'
            }
            return {
                param: formParam,
                msg: msg,
                value: value,
            }
        },
    })
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`.yellow.bold)
})

/*

// app.use(passport.initialize())

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
app.use(passport.initialize());*/
