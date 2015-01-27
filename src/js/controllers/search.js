/**
 * 我的厨房
 */
define(['./module'], function(controllers) {
    'use strict';
    /**
     * 格式化套餐
     */
    function formatSetMenus(src) {
            var dist = [];
            for (var i = 0, len = src.length; i < len; i++) {
                var item = {};
                item.id = src[i].id;
                item.name = src[i].name;
                item.menus = formatMenus(src[i].menus);
                dist.push(item);
            };
            return dist;
        }
        /**
         * 格式化菜谱
         */
    function formatMenus(src) {
            var dist = [];
            for (var i = 0, len = src.length; i < len; i++) {
                var item = {};
                item.id = src[i].id;
                item.name = src[i].name;
                item.imgUrl = src[i].imgUrl;
                if (src[i].mainMaterials) {
                    item.main = getMaterials(src[i].mainMaterials);
                }
                if (src[i].assistMaterials) {
                    item.accessory = getMaterials(src[i].assistMaterials);
                }
                dist.push(item);
            };
            return dist;
        }
        /**
         * 处理食材
         */
    function getMaterials(list) {
        var out = [];
        for (var i = 0, len = list.length; i < len; i++) {
            out.push(list[i].material.name);
        };
        return out.join("、");
    }

    controllers.controller('search', ['$rootScope', '$scope', 'appService', 'searchService', function($rootScope, $scope, appService, searchService) {
        $scope.channelName = "kitchen";
        $rootScope.search = {
            updateMenus: function() {
                var materialIds = appService.get('materialIds'); //食材id
                var categoryId = appService.get('categoryId'); //方案id
                searchService.getMenus(materialIds, categoryId)
                    .success(function(res) {
                        if (res.result === 'success') {
                            $scope.menus = formatMenus(res.data.menus);
                        }
                    }).error(function() {
                        $scope.menus = [];
                    });
            },
            updateSetMenus: function() {
                var materialIds = appService.get('materialIds'); //食材id
                var categoryId = appService.get('categoryId'); //方案id
                searchService.getSetMenus(materialIds, categoryId)
                    .success(function(res) {
                        if (res.result === 'success') {
                            $scope.setmenus = formatSetMenus(res.data.menuGroups);
                        }
                    }).error(function() {
                        $scope.setmenus = [];
                    });
            }
        };
        searchService.getCategorys()
            .success(function(res) {
                if (res.result === 'success') {
                    var cate = res.data.categorys;
                    cate.unshift({
                        'name': '全部',
                        'id': ''
                    });
                    $scope.categorys = cate;
                }
            }).error(function() {
                $scope.categorys = [];
            });
        /**
         * 按方案来搜索
         */
        $scope.searchByCategory = function(id) {
            appService.set('categoryId', id);
            if ($rootScope.search.state === 'menu') {
                $rootScope.search.updateMenus();
            }
            if ($rootScope.search.state === 'setmenu') {
                $rootScope.search.updateSetMenus();
            }
        }
    }]);
    controllers.controller('search.menu', ['$rootScope', '$scope', 'appService', 'searchService', function($rootScope, $scope, appService, searchService) {
        $rootScope.search.state = 'menu';
        $rootScope.search.updateMenus();
    }]);
    controllers.controller('search.setmenu', ['$rootScope', '$scope', 'appService', 'searchService', function($rootScope, $scope, appService, searchService) {
        $rootScope.search.state = 'setmenu';
        $rootScope.search.updateSetMenus();
        // var materialIds = appService.get('materialIds');//食材id
        // var categoryId  = appService.get('categoryId');//方案id
        // searchService.getSetMenus(materialIds, categoryId)
        // .success(function(res) {
        //     if (res.result === 'success') {
        //         $scope.setmenus = formatSetMenus(res.data.menuGroups);
        //     }
        // }).error(function() {
        //     $scope.setmenus = [];
        // });
    }]);
});