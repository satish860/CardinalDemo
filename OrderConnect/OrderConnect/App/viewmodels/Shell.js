﻿define(function (require) {

    var router = require('durandal/plugins/router'),
        system = require('durandal/system'),
        home = require('viewmodels/home');
    return {
        homeViewModel:home,
        activate: function () {
            system.log("Shell has been activated");
            router.activeItem = home;
        }
    };
});