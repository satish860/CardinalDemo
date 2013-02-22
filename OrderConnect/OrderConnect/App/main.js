﻿require.config({
    paths: {
        "text": "durandal/amd/text"
    }
});

define(function (require) {
    var app = require("durandal/app"),
        viewLocator = require('durandal/viewLocator'),
        router = require("durandal/plugins/router"),
        system = require("durandal/system");

    system.debug(true);
    app.title = "Order Connect";
    app.start().then(function () {
        viewLocator.useConvention();
        router.useConvention();
       
        app.setRoot('viewmodels/Shell', 'entrance');
    });
});