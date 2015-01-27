/**
 * app 通用服务
 */
define(['./module'], function(services) {
    'use strict';
    services.factory('appService', ['$http', 'api', function($http, api) {
        var app = {};
        return {
            get: function(type) {
                return app[type];
            },
            set: function(key, value) {
                app[key] = value;
            }
        }
    }]);
});