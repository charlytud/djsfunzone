const auth = (req, res, next) => {
    const User = require('../models/user');
    const token = req.cookies.auth;

    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) res.status(404).json({
            error: true,
            message: "user not found"
        })

        req.token = token;
        req.user = user;

        next();
    })
}

module.exports = {auth};