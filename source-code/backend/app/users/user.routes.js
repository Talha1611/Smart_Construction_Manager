const usersController = require('./user.controller'),
    passport = require('../../config/passport');

module.exports = function(app, version) {

    app.get(version + '/users', 
        usersController.getUserListing
    );

    app.get(version + '/users/:userID', 
        passport.isAuthenticated,
        usersController.getUserDetail
    );

    app.post(version + '/users/:userID', 
        passport.isAuthenticated,
        usersController.updateUserInfo
    );

    app.delete(version + '/users/:userID', 
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        usersController.deleteUser
    );

    app.post(version + '/user/create',
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        usersController.createUser
    );

    app.post(version + '/user/login',
        usersController.loginUser,
        usersController.sendSingInSuccess
    );

    app.get(version + '/user/logout', 
        passport.isAuthenticated,
        passport.deserializeUser,
        usersController.logoutUser
    );

    app.get(version + '/user/validate/', 
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        usersController.validateUser
    );

    app.get(version + '/employeeLogin', 
        passport.isAuthenticated,
        passport.isAuthorized('employee'),
        usersController.sendSingInSuccess
    );

    app.get(version + '/adminLogin', 
        passport.isAuthenticated,
        passport.isAuthorized('admin'),
        usersController.sendSingInSuccess
    );

    app.get(version + '/userLogin', 
        passport.isAuthenticated,
        passport.isAuthorized('user'),
        usersController.sendSingInSuccess
    );

    app.get(version + '/user/firstlogin',
        usersController.firstlogin
    );

}   