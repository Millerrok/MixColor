/**
 * Created by Maxim on 16.11.2014.
 */
App.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'tmpl/colorApp.html',
                controller: 'appCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        //$locationProvider.html5Mode(true);
    }]);