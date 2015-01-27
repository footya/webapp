/**
 * 登录-login
 */
define(['./module','../url'], function(services, url) {
    'use strict';
    services.factory('loginServices', ['$http', '$location', 'api', function($http, $location, api) {
        var apiUrl = api.getApiPath();
        return {
            /**
             * 获取登录信息
             */
            getLoginInfor: function(tel) {
                var reg = new RegExp('\{tel\}', 'g');

                return $http.get(apiUrl + url.login.replace(reg, tel), {});
            }
        }
    }]);
});