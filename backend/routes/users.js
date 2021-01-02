import express from 'express';
import bcrypt from 'bcryptjs';
import passport from 'passport';
const router = express.Router();

// User Model
import User from '../models/Users.js';

// Register Page
// router.get('/register', (req, res) => {
//     res.render('register');
// });

// Register PAge POST METHOD
router.post('/registor-page', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('name', 'Ism Kiritilishi Shart!!!').notEmpty();
    req.checkBody('email', 'Email Kiritilishi Shart!!!').notEmpty();
    req.checkBody('email', 'Email bolishi shart!!!').isEmail();
    req.checkBody('password', 'Parol Kiritilishi Shart!!!').notEmpty();
    req.checkBody('password2', 'Parol Togri Kelmadi!!!').equals(req.body.password);

    const errors = req.validationErrors();

    if (errors) {
        console.log(errors);
    } else {
        const newUser = new User({
            name: name,
            email: email,
            password: password
        });

        bcrypt.genSalt(10, (err, pass) => {
            bcrypt.hash(newUser.password, pass, (err, hash) => {
                if (err) console.log(err);

                newUser.password = hash;
                newUser.save(err => {
                    if (err) console.log(err);
                    else {
                        req.flash(
                            'success',
                            'Muvaffaqiyatli Royhatdan Otdingiz'
                        );
                        res.redirect('/login-page');
                    }
                });
            });
        });
    }
});

// Register PAge
// router.get('/login', (req, res) => {
//     res.render('login');
// });

// Register PAge
router.post('/login-page', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

// LOGOUT
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Muvaffaqiyatli Tizimdan Chiqdingiz !!!');
    res.redirect('/login');
});

export default router