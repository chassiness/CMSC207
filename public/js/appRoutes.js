angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/account/login.html',
            controller: 'AccountController'
        })

        .when('/index.html', {
            templateUrl: 'views/account/login.html',
            controller: 'AccountController'
        })

        // ADMIN ROLE

        // add employee
        .when('/addemployee', {
            templateUrl: 'views/admin/addemployee.html',
            controller: 'AdminController'
        })

        .when('/adddeposit', {
            templateUrl: 'views/admin/adddeposit.html',
            controller: 'AdminController'
        })

        .when('/adminhome', {
            templateUrl: 'views/admin/adminhome.html',
            controller: 'AdminController'
        })

        // EMPLOYEE ROLE

        .when('/employeehome', {
            templateUrl: 'views/employee/employeehome.html',
            controller: 'EmployeeController'
        })

        .when('/viewdeposits', {
            templateUrl: 'views/employee/depositreport.html',
            controller: 'EmployeeController'
        });



    $locationProvider.html5Mode(true);

}]);