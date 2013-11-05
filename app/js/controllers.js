/**
 * Created with JetBrains PhpStorm.
 * User: pablo
 * Date: 11/5/13
 * Time: 10:58 AM
 * To change this template use File | Settings | File Templates.
 */

/**controllers*/

var angularDemoControllers = angular.module('angularDemoControllers', []);

angularDemoControllers.controller('LandingPageController', ['$scope', '$http',
    function LandingPageController($scope, $http){
        $scope.homePageName = "Landing Page Track Top"

    }]);

angularDemoControllers.controller('HomePageController', ['$scope', '$http',
    function HomePageController($scope, $http){
        $scope.homePageName = "Track Top Home"
    }]);
