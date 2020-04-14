const { User } = require('../models/user');

const auth = (req, res, next) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.NWU4ZGU1M2I2NjNjYWExODIwYWU0NjQ0.iCHXw5H6EITZzTSRHuYgf9O46oa7BE8t1G2ptqOA-uA";
    console.log(req);
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) res.status(404).json({
            success: false,
            error: "user not found"
        })

        req.token = token;
        req.user = user;

        next();
    })
}

module.exports = auth;