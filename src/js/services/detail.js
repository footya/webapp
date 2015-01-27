/**
 * 详情-detail
 */
define(['./module','../url'], function(services, url) {
    'use strict';
    services.factory('detailServices', ['$http', '$location', 'api', function($http, $location, api) {
        var apiUrl = api.getApiPath();
        return {
            /**
             * 获取菜谱详情
             */
            getDetailMenus: function(id) {
                var reg = new RegExp('\{id\}', 'g');

                return $http.get(apiUrl + url.detailMenus.replace(reg, id), {});
            },
            /**
             * 获取食材详情
             */
            getDetailMaterials: function(id) {
                var reg = new RegExp('\{id\}', 'g');

                return $http.get(apiUrl + url.detailMaterials.replace(reg, id), {});
            },
            /*
             * 获取餐具详情
             */
            getDetailCookers: function (id) {
                var reg = new RegExp('\{id\}', 'g');

                return $http.get(apiUrl + url.detailCookers.replace(reg, id), {});
            }
        }
    }]);
});