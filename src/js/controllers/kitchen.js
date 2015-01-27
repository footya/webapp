/**
 * 我的厨房
 */
define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('kitchen', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.channelName = "kitchen";
    }]);
    controllers.controller('kitchen.material', ['$rootScope', '$scope', '$location', 'kitchen', 'appService', function($rootScope, $scope, $location, kitchen, appService) {
        $rootScope.kitchen = {
            state: 'material'
        };
        kitchen.getMaterials()
            .success(function(res) {
                if (res.result === 'success') {
                    $scope.materials = res.data.material;
                }
            }).error(function() {
                $scope.materials = [];
            });
        $scope.searchMenu = function() {
            var materials = [];
            for (var i = 0, len = $scope.materials.length; i < len; i++) {
                var id = $scope.materials[i].id;
                materials.push(id);
            }
            appService.set('materialIds',materials.join(','));
            appService.set('categoryId','');
            $location.path('/search/menu');
        }
    }]);
    controllers.controller('kitchen.cooker', ['$rootScope', '$scope', 'kitchen', function($rootScope, $scope, kitchen) {
        $rootScope.kitchen = {
            state: 'cooker'
        };
        kitchen.getCookers()
            .success(function(res) {
                if (res.result === 'success') {
                    $scope.cookers = res.data.cooker;
                }
            }).error(function() {
                $scope.cookers = [];
            });
    }]);
    controllers.controller('kitchen.product', ['$rootScope', '$scope', function($rootScope, $scope) {
        $rootScope.kitchen = {
            state: 'product'
        };
    }]);
    controllers.controller('kitchen.menu', ['$rootScope', '$scope', function($rootScope, $scope) {
        $rootScope.kitchen = {
            state: 'menu'
        };
    }]);
});