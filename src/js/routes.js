/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
        //厨房
        .state('kitchen', {
            url: '',
            templateUrl: 'kitchen.html',
            controller:'kitchen'
        })
        //厨房-食材
        .state('kitchen.material', {
            url: '/kitchen/material',
            templateUrl: 'kitchen.material.html',
            controller: 'kitchen.material'
        })

        //厨房-厨具
        .state('kitchen.cooker', {
            url: '/kitchen/cooker',
            templateUrl: 'kitchen.cooker.html',
            controller: 'kitchen.cooker'
        })
        //厨房-作品
        .state('kitchen.product', {
            url: '/kitchen/product',
            templateUrl: 'nodata.html',
            controller: 'kitchen.product'
        })
        //厨房-菜谱
        .state('kitchen.menu', {
            url: '/kitchen/menu',
            templateUrl: 'nodata.html',
            controller: 'kitchen.menu'
        })
        //食材
        .state('material', {
            url: '/material',
            templateUrl: 'material.html',
            controller:'material'
        })
        //食材-添加
        .state('material.add', {
            url: '/add',
            templateUrl: 'material.add.html',
            controller:'material.add'
        })
        //食材-删除
        .state('material.del', {
            url: '/del',
            templateUrl: 'material.del.html',
            controller:'material.del'
        })

        //详情
        .state('detail', {
            url: '',
            templateUrl: 'detail.html',
            controller:'detail'
        })
        //详情-食材
        .state('detail.material', {
            url: '/detail/material/:id',
            templateUrl: 'detail.material.html',
            controller:'detail.material'
        })
        //详情-厨具
        .state('detail.cooker', {
            url: '/detail/cooker/:id',
            templateUrl: 'detail.cooker.html',
            controller:'detail.cooker'
        })
        //详情-菜单
        .state('detail.menu', {
            url: '/detail/menu/:id',
            templateUrl: 'detail.menu.html',
            controller:'detail.menu'
        })

        //搜索
        .state('search', {
            url: '',
            templateUrl: 'search.html',
            controller:'search'
        })
        //搜索-菜谱
        .state('search.menu', {
            url: '/search/menu',
            templateUrl: 'search.menu.html',
            controller:'search.menu'
        })
        //搜索-套餐
        .state('search.setmenu', {
            url: '/search/setmenu',
            templateUrl: 'search.setmenu.html',
            controller:'search.setmenu'
        })

        //登录
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller:'login'
        })
        //菜园
        .state('garden', {
            url: '/garden',
            templateUrl: 'garden.html'
        })
        //集市
        .state('market', {
            url: '/market',
            templateUrl: 'market.html'
        })
        //首页
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
    }]);
});
