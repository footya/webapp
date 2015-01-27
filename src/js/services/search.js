/**
 * 推荐菜谱service
 */
define(['./module','../url'], function(services, url) {
    'use strict';
    services.factory('searchService', ['$http', 'api', function($http, api) {
        var apiUrl = api.getApiPath();
        return {
            /**
             * 获取菜谱
             */
            getMenus: function(materialIds, categoryId) {
                return $http.get(apiUrl + url.menu, {
                    cache: true,
                    params: {
                        materialIds: materialIds,
                        categoryId: categoryId
                    }
                });
            },
            /**
             * 获取套餐
             */
            getSetMenus: function(materialIds, categoryId) {
                return $http.get(apiUrl + url.setmenu, {
                    cache: true,
                    params: {
                        materialIds: materialIds,
                        categoryId: categoryId
                    }
                });
            },
            /**
             * 获取方案
             */
            getCategorys: function() {
                return $http.get(apiUrl + url.categorys, {
                    cache: true
                });
            }
        }
    }]);
});