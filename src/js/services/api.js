/**
 * api 配置
 */
define(['./module'], function (services) {
    'use strict';
    services.factory('api',function($http, $location){
        var port = $location.port() === 80 
            ? '' 
            : ':' + $location.port();
        var host = $location.protocol() + '://' + $location.host() + port;
        return {
            getPath: function() {
                return host + '/api';
            },
            getApiPath: function() {
                return host;
            },
            getPicPath:function () {
                return host + '/pic/images/';
            }
        }
    });
});

