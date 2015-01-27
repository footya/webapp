/**
 * 我的厨房
 */
define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('material', ['$rootScope', '$scope', 'materialService', function($rootScope, $scope, materialService) {
        $scope.channelName = "kitchen";
        //更新分类
        $scope.update = function(id) {
            $scope.currentId = id;
            materialService.getMaterial(id)
            .success(function(res) {
                if (res.result === 'success') {
                    $scope.currentComponents = res.data.matOverviews;
                    $scope.currentCache = res.data.matOverviews;
                    materialService.set("currentComponents",$scope.currentComponents);
                    materialService.set("currentCache",$scope.currentCache);
                }
            }).error(function() {
                $scope.categorys = [];
            });
        };
        //更新当前列表
        $scope.updateComponents = function (val) {
            $scope.currentComponents = val;
        }
        //食材分类
        materialService.getCategorys()
        .success(function(res) {
            if (res.result === 'success') {
                $scope.categorys = res.data.category;
                $scope.update($scope.categorys[0].id);
            }
        }).error(function() {
            $scope.categorys = [];
        });

    }]);
    //添加食材
    controllers.controller('material.add', ['$rootScope', '$scope', '$location','materialService',function($rootScope, $scope, $location, materialService) {
        $scope.mySelected = []; //用户已选
        // $rootScope.searchKey = $scope.searchKey;
        console.log($scope.searchKey);
        // 选中
        $scope.select = function(id) {
                var index = $scope.mySelected.indexOf(id);
                if (index > -1) {
                    $scope.mySelected.splice(index, 1);
                } else {
                    $scope.mySelected.push(id);
                }
            }
        //是否被选中
        $scope.has = function(id) {
                var index = $scope.mySelected.indexOf(id);
                return index > -1
                ? true : false;
        }
        //添加按钮
        $scope.addMaterials = function() {
            materialService.addMaterials($scope.mySelected.join(","))
            .success(function(res) {
                if (res.result === 'success') {
                    $location.path('/kitchen/material');
                }
            }).error(function() {
                $location.path('/login');
            });
        }
        // 搜索
        $scope.search = function() {
            var key = $scope.searchKey;
            //[todo] 需要服务提供搜索成功的数据
            if(key != ""){
                materialService.getSearch(key)
                .success(function(res) {
                    if (res.result === 'success') {
                        $scope.updateComponents(res.data.matOverviews);
                    }
                }).error(function() {
                   $scope.updateComponents(materialService.get("currentCache"));
                });
            }else{
                $scope.updateComponents(materialService.get("currentCache"));
            }
        }
    }]);
    //删除食材
    controllers.controller('material.del', ['$rootScope', '$scope', '$location', 'materialService', 'kitchen', function($rootScope, $scope, $location, materialService, kitchen) {
        $scope.mySelected = []; //用户已选
        //用户已有食材
        kitchen.getMaterials()
        .success(function(res) {
            if (res.result === 'success') {
                $scope.myMaterials = res.data.material;
            }
        }).error(function() {
            $scope.myMaterials = [];
        });
        // 选中
        $scope.select = function(id) {
                console.log(id);
                var index = $scope.mySelected.indexOf(id);
                if (index > -1) {
                    $scope.mySelected.splice(index, 1);
                } else {
                    $scope.mySelected.push(id);
                }
            }
        //是否被选中
        $scope.has = function(id) {
                var index = $scope.mySelected.indexOf(id);
                return index > -1
                ? true : false;
            }
        //全选
        $scope.selectAll = function() {
            angular.forEach($scope.myMaterials, function(value, key) {
                var id = value.id;
                if (!$scope.has(id)) {
                    this.push(value.id);
                }
            }, $scope.mySelected);
        }
        //删除按钮
        $scope.delMaterials = function() {
            materialService.delMaterials($scope.mySelected.join(","))
            .success(function(res) {
                if (res.result === 'success') {
                    $location.path('/kitchen/material');
                }
            }).error(function() {
                $location.path('/login');
            });
        }
        // 反选
        $scope.inverse = function() {
            var temp = $scope.mySelected;
            $scope.mySelected = [];
            angular.forEach($scope.myMaterials, function(value, key) {
                var id = value.id;
                var index = temp.indexOf(id);
                if (index === -1) {
                    this.push(value.id);
                }
            }, $scope.mySelected);
        }
    }]);
});