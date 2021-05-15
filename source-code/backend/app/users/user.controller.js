const winston = require('../../config/winston'),
    passport = require('../../config/passport'),
    mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    userAccount = mongoose.model('userAccount');

const loginUser = async function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(info);
        }
        
        req.logIn(user, function(err) {
            if (err) {
                winston.error(err);
                return next({ msgCode: 5051 });
            }
            return next();
        });
    })(req, res, next);
};

const sendSingInSuccess = function (req, res, next) {
    return res.json({
        message: 'User signIn successfully.',
        data: {
            user: req.user
        }
    });
};

module.exports = {
    loginUser,
    sendSingInSuccess
}