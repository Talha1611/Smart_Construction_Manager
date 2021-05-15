const usersController = require('./user.controller'),
    passport = require('../../config/passport');

module.exports = function(app, version) {

    app.post(version + '/user/login',
        usersController.loginUser,
        usersController.sendSingInSuccess
    );


}   