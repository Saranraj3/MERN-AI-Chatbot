const express = require('express');
const passport = require('passport');
const route = express.Router();

route.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "Successfully Logged In",
            user: req.user
        });
    } else {
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
})

route.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: "Login Failed"
    });

});

route.get('/logout', (req, res) => {
    req.logOut();
    res.redirect(process.env.CLIENT_URL);
})

route.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

route.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
)


module.exports = route;