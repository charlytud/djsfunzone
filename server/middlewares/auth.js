import User from '../models/user';

module.exports = (req, res, next) => {
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