import localStrategy from 'passport-local'
const localStrategy = localStrategy.Strategy;
import User from '../models/Users';
import dbb from './db.js';
import bcrypt from 'bcryptjs';

export default passport => {
    passport.use(new localStrategy((username, password, done) => {
        let a = { username: username };
        User.findOne(a, (err, user) => {
            if (err) throw err;

            if (!user)
                done(null, false, {
                    message: 'Foydalanuvchi To\'pilmadi!!!'
                });

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) done(null, user);
                else done(null, false, { message: 'Noto\'g\'ri Parol' });
            });
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};