/**
 * url 地址配置
 */

define([''], function(app) {
    'use strict';
    var url = {
        'debug': {
            'material': '/api/materials.json', //查看我的食材接口
            'cooker': '/api/cookers.json', //查看我的厨具接口
            'categorylist': '/api/category.json', //列出食材的分类
            'categoryshow': '/api/material.json', //列出分类中的食材
            'search': '/api/search.json', //搜索食材suggest接口
            'addmaterial': '/api/success.json', //从分类中添加食材
            'delmaterial': '/api/success.json', //删除我的厨房里的食材
            'menu': '/api/menu.json', //菜谱列表页面接口
            'setmenu': '/api/setmenu.json', //套餐列表页面接口
            'categorys': '/api/categorys.json', //方案接口
            'detailMenus': '/api/detail.menus.json', //菜谱详情接口
            'detailMaterials': '/api/detail.materials.json', //食材详情接口
            'detailCookers': '/api/detail.cookers.json', //厨具详情接口
            'login': '/api/login.json' //登录
        },
        'online': {
            'material': '/dufood/kitchen/material/list', //我的食材接口
            'cooker': '/dufood/kitchen/cooker/list', //查看我的厨具接口
            'categorylist': '/dufood/category/list', //列出食材的分类
            'categoryshow': '/dufood/category/{id}/show', //列出分类中的食材
            'search': '/dufood/material/search', //搜索食材suggest接口,
            'addmaterial': '/dufood/kitchen/material/add', //从分类中添加食材
            'delmaterial': '/dufood/kitchen/material/del', //删除我的厨房里的食材
            'menu': '/dufood/menu/getByMaterialIds', //菜谱列表页面接口
            'setmenu': '/dufood/menu/getGroupsByMaterialIds', //套餐列表页面接口
            'categorys': '/dufood/menu/categorys', //方案接口
            'detailMenus': '/dufood/menu/{id}/show', //菜谱详情接口
            'detailMaterials': '/dufood/material/{id}/show', //食材详情接口
            'detailCookers': '/dufood/cooker/{id}/show', //厨具详情接口
            'login': '/dufood/login?phoneNumber={tel}' //登录
        }
    }
    return window.debug !== 1 ? url.debug : url.online;
});