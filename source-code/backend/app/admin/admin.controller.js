const winston = require('../../config/winston'),
    passport = require('../../config/passport'),
    mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10,
    userAccount = mongoose.model('userAccount');

const loginadmin = async function(req, res, next) {
    passport.authenticate('local', function(err, admin, info) {
        if (err) {
            return next(err);
        }
        if (!admin) {
            return next(info);
        }
        
        req.logIn(admin, function(err) {
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
        message: 'Admin signIn successfully.',
        data: {
            admin: req.user
        }
    });
};

const firstLogin = async function(req, res, next) {

    try {

        const filter = {$or:[
            {email: req.params.username},
            {phone: req.params.username},
            {username: req.params.username}
        ]};

        const user = await userAccount.findOne(filter);

        console.log(user);
        if (user.password) {
            return res.json({
                status: 0,
                message: "false",
                data: {}
            })
        }
        return res.json({
            status: 0,
            message: "true",
            data: {}
        })

    } catch (err) {
        winston.error("Unable to detect first Login: " + err);
        return res.json({
            status: 0,
            message: "Unable to detect first Login",
            data: {}
        });
    }

}



module.exports = {
    loginadmin,
    sendSingInSuccess,
    firstLogin
}