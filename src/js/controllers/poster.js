/**
 * 海报
 */
define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('poster', ['$rootScope','$scope', '$cookieStore', function($rootScope, $scope, $cookieStore) {
        $scope.myposter = $cookieStore.get("myposter");
        $scope.openapp = function () {
            $scope.myposter = 1;
            $cookieStore.put("myposter",1);
        }
        $scope.myposterIndex = 1;
        $scope.goNext = function() {
            $scope.myposterIndex ++;
            if($scope.myposterIndex > 4){
                $scope.myposter = 1;
                $cookieStore.put("myposter", 1);
            }
        }
        $scope.goPre = function() {
            $scope.myposterIndex --;
            if($scope.myposterIndex < 1){
                $scope.myposterIndex = 4;
            }
        }
        $scope.goFocus = function(index) {
            $scope.myposterIndex = index;
        }
    }]);
});