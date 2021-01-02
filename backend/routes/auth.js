import express from 'express'
const router = express.Router();
import passportGoogle from '../auth/google.js'

router.get('/google', passportGoogle.authenticate(
    'google',
    {
        scope: ['profile']
    }
));

router.get('/google/callback', passportGoogle.authenticate(
    'google',
    {
        failureRedirect: '/'
    },
    (req, res) => {
        res.redirect('/login-page');
    }
)
);

export default router