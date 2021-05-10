'use strict'; 

const mongoose = require('mongoose'),
    mongoose_timestamps = require('mongoose-timestamp'), 
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    schema = mongoose.Schema; 

let userAccount = new schema ({
    email: {
        address: {type: String, default: ''},
        privacy: {type: String, default: 'following', enum: ['public', 'following', 'private']}
    },
    name: {type: String, default: '', required: true},
    profileImage: { type: String, default: '' },
    username: {type: String, required: true},
    phone: {
        number: {type: String, default: ''},
        privacy: {type: String, default: 'following', enum: ['public', 'following', 'private']}
    },
    dob: { type: Date, default: new Date() },
    password: { type: String ,  default: '', required: true},
    userType: {type: String, default: 'user', enum: ['admin', 'employee', 'user']},
    ads: [{type: schema.Types.ObjectId, ref: 'adSchema'}],
    requests: [{type: schema.Types.ObjectId, ref: 'requestSchema'}]
}); 

userAccount.plugin(mongoose_timestamps);

userAccount.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        
        if (err) return cb(err);

        cb(null, isMatch);
    });

}

userAccount.pre('save', async function(next) {

    try {

        let user = this;
        console.log('this: ', this);

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

module.exports = mongoose.model('userAccount', userAccount);
