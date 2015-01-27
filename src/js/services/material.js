/**
 * 食材service
 */
define(['./module','../url'], function(services, url) {
    'use strict';
    services.factory('materialService', ['$http', 'api', function($http, api) {
        var materials = {};
        var apiUrl = api.getApiPath();
        return {
            get: function(type) {
                return materials[type];
            },
            set: function(key, value) {
                materials[key] = value;
            },
            /**
             * 获取分类
             */
            getCategorys: function() {
                return $http.get(apiUrl + url.categorylist, {
                    cache: true
                });
            },
            /**
             * 获取单分类下食材
             */
            getMaterial: function(id) {
                 var reg = new RegExp('\{id\}', 'g');
                return $http.get(apiUrl + url.categoryshow.replace(reg, id), {
                    cache: true,
                    params: {
                        id: id
                    }
                });
            },
            /**
             * 获取搜索结果
             */
            getSearch: function(key) {
                return $http.get(apiUrl + url.search, {
                    cache: true,
                    params: {
                        queryWord: key
                    }
                });
            },
            /**
             * 添加食材
             */
            addMaterials: function(ids) {
                return $http.get(apiUrl + url.addmaterial, {
                    params: {
                        ids: ids
                    }
                });
            },
            /**
             * 删除食材
             */
            delMaterials: function(ids) {
                return $http.get(apiUrl + url.delmaterial, {
                    params: {
                        ids: ids
                    }
                });
            }
        }
    }]);
});