'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp'), 
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    schema = mongoose.Schema; 

let userAccount = new schema ({
    email: {type: String, default: '', unique: true, required: true},
    name: {type: String, default: ''},
    profileImage: { type: String, default: '' },
    username: {type: String, unique: true, required: true},
    phone: {type: String, default: '', unique: true},
    dob: { type: Date, default: Date.now },
    usertype: {type: String, default: 'user', enum: ['user', 'admin', 'employee']},
    password: { type: String ,  default: '', required: true},    
    privacy: {
        email: {type: String, default: 'private', enum: ['public', 'private']},
        phone: {type: String, default: 'private', enum: ['public', 'private']}
    }
}); 

userAccount.plugin(mongoose_timestamps);
userAccount.index({ email: 1, usertype: 1, phone: 1 }, { unique: true });

userAccount.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        
        if (err) return cb(err);

        cb(null, isMatch);
    });

}

userAccount.pre('save', async function(next) {

    try {

        let user = this;

        // only hash the password if it has been modified or is new
        if (!user.isModified('password')) return next();

        // generate a salt
        let salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        console.log('Password Salt', salt);

        let hash = await bcrypt.hash(this.password, salt);
        console.log('Password hash: ', hash);

        // override clear text password with hashed one        
        user.password = hash;
        next();
    } catch (err) {
        return next(err);
    }
});

module.exports = mongoose.model('userAccount', userAccount, 'userAccount');
