/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'angular': 'lib/angular',
        'angular-route': 'lib/angular-route',//可用ui-route代替
        'angular-ui-router': 'lib/angular-ui-router',
        'angular-cookies': 'lib/angular-cookies',
        'angular-touch': 'lib/angular-touch',
        'mobile-angular-ui': 'lib/mobile-angular-ui',
        'domReady': 'lib/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'mobile-angular-ui':{
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
