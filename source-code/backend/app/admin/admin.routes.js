const adminController = require('./admin.controller'),
    passport = require('../../config/passport');

module.exports = function(app, version) {

    app.post(version + '/admin/login',
        adminController.loginadmin,
        adminController.sendSingInSuccess
    );

    app.get(version + '/admin/first/:username',
        adminController.firstLogin,
    );


}   