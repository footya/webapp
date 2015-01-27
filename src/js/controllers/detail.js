/**
 * 我的厨房
 */
define(['./module'], function(controllers) {
    'use strict';
    /**
     * 格式化厨具详情
     */
    function formatCooker (json) {
        var cooker = {};

        cooker.id = json.id;
        cooker.name = json.name;
        cooker.description = json.description;
        cooker.relMenus = formatMenus(json.menus);

        return cooker;
    }
    /**
     * 格式化菜谱
     */
    function formatMenus (src) {
        var dist = [];
        for (var i = 0, len = src.length; i < len; i++) {
            var item = {};
            item.id = src[i].id;
            item.name = src[i].name;
            item.imgUrl = src[i].imgUrl;
            item.main = getMaterials(src[i].mainMaterials);
            item.accessory = getMaterials(src[i].assistMaterials);
            dist.push(item);
        };
        return dist;
    }
    /**
     * 处理食材
     */
    function getMaterials (list) {
        var out = [];
        for (var i = 0, len = list.length; i < len; i++) {
            out.push(list[i].material.name);
        };
        return out.join("、");
    }

    controllers.controller('detail', ['$rootScope','$scope', function($rootScope,$scope) {
        $scope.name = 'detail';
        $scope.channelName = "kitchen";
    }]);
    controllers.controller('detail.menu', ['$rootScope','$scope','$stateParams','detailServices', function($rootScope,$scope,$stateParams,detailServices) {
        detailServices.getDetailMenus($stateParams.id)
            .success(function (data) {
                if (data.result === 'success') {
                    $scope.menu = data.data.menu;
                }
            }).error(function () {
                $scope.menu = [];
            });
    }]);
    controllers.controller('detail.material', ['$rootScope','$scope','$stateParams','detailServices', function($rootScope,$scope,$stateParams,detailServices) {
        $scope.pagestate = 'material';
        detailServices.getDetailMaterials($stateParams.id)
            .success(function (data) {
                if (data.result === 'success') {
                    $scope.material = data.data.material;
                }
            }).error(function () {
                $scope.material = [];
            });
    }]);
    controllers.controller('detail.cooker', ['$rootScope','$scope','$stateParams','detailServices', function($rootScope,$scope,$stateParams,detailServices) {
        detailServices.getDetailCookers($stateParams.id)
            .success(function (data) {
                if (data.result === 'success') {
                    $scope.cooker = formatCooker(data.data.cookerMenu);
                }
            }).error(function () {
                $scope.cooker = [];
            });
    }]);
});