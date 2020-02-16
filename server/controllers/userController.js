
const { User } = require("../models/user");
const asyncMiddleware = require("../middlewares/async");
// const auth = require("../middlewares/auth");

module.exports = {
    createUser: asyncMiddleware(async(req, res) => {
        const {
            name,
            email,
            cell,
            picture,
            password
        } = req.body;
    
        let userFields = {};

        if(name) userFields.userName = name;
        if(email) userFields.userEmail = email;
        if(cell) userFields.userCell = cell;
        if(picture) userFields.picture = picture;
        if(password) userFields.password = password;

        // console.log(userFields);
        await new User(userFields).save((err, user) => {
            if(err) return err;
            
            res.status(200).json({
                status: "success",
                newUser: user
            })
        });        
    }),
    updateUser: asyncMiddleware(async(req, res) => {
        const {
            _id,
            name,
            email,
            cell,
            picture
        } = req.body;
    
        let userFields = {};

        if(name) userFields.userName = name;
        if(email) userFields.userEmail = email;
        if(cell) userFields.userCell = cell;
        if(picture) userFields.picture = picture;

        User.findByIdAndUpdate(
            { _id },
            { $set: userFields },
            { $new: true },
            function(err, user){
                if (err) return res.send(err);
                
                return res.status(200).json({
                    success: "true",
                });
            }
        );
    }),
    getUsers: asyncMiddleware(async(req, res) => {
        const users = await User.find();
        if(!users){
            return res.status(404).json({ error: "No user Found"});
        }
        return res.status(200).json(users);
    }),
    getUserById: asyncMiddleware(async(req, res)=>{
        const _id = req.query.id;
        const user = await User.findById({ _id });
        if(!user) return res.status(400).json({ error: "No user Found" });
        return res.status(200).send(user);
    }),
    deleteUser: asyncMiddleware(async(req, res) => {
        const _id = req.query.id;
        const user = await user.findByIdAndRemove({ _id });

        if(!user) return res.status(404).json({error: "user Not Found"});
        
        return res.status(200).json({ success: true });      
    }),
    loginUser: asyncMiddleware(async(req, res) => {
        const {
            email,
            password
        } = req.body;

        await User.findOne({'email': email}, (err, user) => {
            if(err) return res.status(400).send(err);
            if(!user) return res.status(204).json({
                isAuth: false,
                error: "Email not found"
            })

            User.comparePassword(password, (err, isMatch) =>{
                if(err) res.send(err);
                if(!isMatch) return res.status(204).json({
                    isAuth: false,
                    error: "Wrong Password"
                })

                User.genToken((err, user) => {
                    if(err) return  res.status(400).send(err);
                    res.cookie('auth', user.token).json({
                        isAuth: true,
                        user
                    })
                })
            })
        })
    }),
    logoutUser: asyncMiddleware(async(req, res) => {
        req.user.deleteToken(req.token, (err, user) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({
                success: true 
            })
        })
    })

};