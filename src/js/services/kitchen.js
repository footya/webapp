/**
 * 厨房-kitchen
 */
define(['./module','../url'], function(services, url) {
    'use strict';
    services.factory('kitchen', ['$http', '$location', 'api', function($http, $location, api) {
        var apiUrl = api.getApiPath();
        return {
            /**
             * 获取食材
             */
            getMaterials: function() {
                return $http.get(apiUrl + url.material, {});
            },
            /*
             * 获取餐具
             */
            getCookers: function() {
                return $http.get(apiUrl + url.cooker, {});
            }
        }
    }]);
});