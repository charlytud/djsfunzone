
const { User } = require("../models/user");
const asyncMiddleware = require("../middlewares/async");

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
        return res.status(200).json({
            isAuth: true,
            userId: req.user._id,
            userName: req.user.userName,
            userEmail: req.user.userEmail,
            userCell: req.user.userCell,
            userPicture: req.user.picture
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