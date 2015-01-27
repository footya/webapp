/**
 * 主程序入口
 */
define([
    'angular',
    'angular-ui-router',
    'angular-cookies',
    'angular-touch',
    'mobile-angular-ui',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular) {
    'use strict';
    return angular.module('app', [
        'ui.router',
        'ngCookies',
        'ngTouch',
        'mobile-angular-ui',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services'
    ]).controller('app', ['$rootScope', '$scope', '$cookieStore', '$location', 'api', function($rootScope, $scope, $cookieStore, $location, api) {
        $rootScope.apiPath = api.getApiPath();
        $rootScope.picPath = api.getPicPath();
        $rootScope.goBack = function () {
            window.history.go(-1);
        };
        // if(!$cookieStore.get('PHONENUMBER')){
        //     $location.path('/login');
        // }
    }]);;
});
