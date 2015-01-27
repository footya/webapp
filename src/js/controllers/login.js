/**
 * 登录
 */
define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('login', ['$rootScope','$scope','$cookieStore','$location','loginServices', function($rootScope,$scope,$cookieStore,$location,loginServices) {
        $scope.name = 'login';

        if ($cookieStore.get('PHONENUMBER')) {
            $location.path('/kitchen/material');
        }
        
        $scope.login = function() {
            var tel = $scope.tel * 1;

            if(!(/^1[3|4|5|8]\d{9}$/.test(tel))){
                alert('请输入正确的手机号');
            } else {
                loginServices.getLoginInfor(tel)
                    .success(function (data) {
                        if (data.result === 'success') {
                            $cookieStore.put('PHONENUMBER', tel);
                            $location.path('/kitchen/material');
                        }
                    }).error(function () {
                        console.log('服务异常');
                    });
            }
        };
    }]);
});