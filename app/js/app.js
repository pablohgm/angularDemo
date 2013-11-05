/**
 * Created with JetBrains PhpStorm.
 * User: pablo
 * Date: 11/5/13
 * Time: 10:55 AM
 * To change this template use File | Settings | File Templates.
 */

/**App module*/

var angularDemoApp = angular.module('angularDemoApp', ['angularDemoControllers']);

angularDemoApp.config(['$routeProvider',
        function($routeProvider){
            $routeProvider.when('/',
            {
                templateUrl:'partials/landing.html',
                controller:'LandingPageController'
            }).when('/forgotPassword',
            {
                templateUrl:'partials/forgotPassword.html'

            }).when('/register',
            {
                templateUrl:'partials/register.html'
            })
        }]);