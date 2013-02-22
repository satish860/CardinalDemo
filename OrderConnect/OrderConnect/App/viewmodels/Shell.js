define(function (require) {

    var router = require('durandal/plugins/router'),
        system = require('durandal/system'),
        app = require('durandal/app');



    return {

        activate: function () {
           

            system.log("Shell has been activated");
        }
    };
});