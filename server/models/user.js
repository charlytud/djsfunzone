const config = require('./../config/config').get(process.env.NODE_ENV);
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('brcrypt');
const SALT_I = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  userCell:{
    type: String,
    required: true
  },
  picture:{
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

userSchema.pre('save', function(next){
  var user = this;

  if(user.isModified('password')){
    bcrypt.genSalt(SALT_I, function(err, salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err);

        user.password = hash;
        next();
      })
    })
  }
    else {
      next();
  }
})

userSchema.methods.comparePassword = function(canditatePassword, cb){
  bcrypt.compare(canditatePassword, this.password, function(err, isMatch){
    if(err) return cb(err);

    cb(null, isMatch);
  })
}

userSchema.methods.genToken = function(cb){
  var user = this;
  const token = jwt.sign(user._id.toHexString(), config.SECRET);

  user.token = token;
  user.save(function(err, user){
    if(err) return cb(err);
    cb(null, user);
  })

}

userSchema.statics.findByToken = function(token, cb){
  var user = this;
  jwt.verify(token, config.SECRET, function(err, decode){
    user.findOne({"_id":decode, "token":token}, function(err, user){
      if(err) return cb(err);
      cb(null, user);
    })
  })
}

userSchema.methods.deleteToken = function(token, cb){
  var user = this;

  user.update({$unset:{token:1}}, function(err, user){
    if(err) return cb(err);
    cb(null, user);
  })
}

const User = mongoose.model('User', userSchema);

module.exports = { User };

