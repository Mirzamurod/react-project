import express from 'express'
import bcrypt from 'bcryptjs'
import passport from 'passport'
const router = express.Router()

// User Model
import User from '../models/Users.js'

// router.post('/register-page', (req, res) => {
//     const username = req.body.username
//     const email = req.body.email
//     const password = req.body.password

//     req.checkBody('username', 'Ism bolishi shart!!!').notEmpty()
//     req.checkBody('email', 'Email bolishi shart!!!').notEmpty()
//     req.checkBody('email', 'Email bolishi shart!!!').isEmail()
//     req.checkBody('password', 'Password bolishi shart!!!').notEmpty()

//     const errors = req.validationErrors()

//     if (errors) {
//         res.redirect('/register-page', {
//             errors
//         });
//     } else {
//         const newUser = new User({
//             username,
//             email,
//             password
//         })

//         bcrypt.genSalt(10, (err, pass) => {
//             bcrypt.hash(newUser.password, pass, (err, hash) => {
//                 if (err)
//                     console.log(err);

//                 newUser.password = hash
//                 newUser.save((err) => {
//                     if (err)
//                         console.log(err);
//                     else {
//                         res.redirect('/login-page');
//                     }
//                 })
//             })
//         })
//     }
// });

router.post('/register-page', async (req, res) => {
    try {
        const { username, email, password } = req.body

        //validate
        if (!username || !email || !password)
            return res.status(400).json({ msg: 'Not all fields have been entered' })
        if (password.length < 5)
            return res
                .status(400)
                .json({ msg: 'The password needs to be at least 5 characters long' })
        if (password !== passwordCheck)
            return res.status(400).json({ msg: ' Enter the same password twice for verification' })

        const existingUser = await User.find({ email })
        if (existingUser)
            return res.status(400).json({ msg: 'An account with this email already exists' })

        // if (!name) name = email
        const newUser = new User({
            username,
            email,
            password,
        })

        bcrypt.genSalt(10, (err, pass) => {
            bcrypt.hash(newUser.password, pass, (err, hash) => {
                if (err) console.log(err)

                newUser.password = hash
                newUser.save(err => {
                    if (err) console.log(err)
                    else {
                        res.redirect('/login-page')
                    }
                })
            })
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router
