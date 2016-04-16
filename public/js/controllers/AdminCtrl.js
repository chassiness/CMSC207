admin = angular.module('AdminCtrl', []);

admin.service('depositBuilder', function () {
    this.buildDepositEntry = function (deposit) {
        var newDepositEntry = {
            'employeeName' : deposit.employeeName,
            'voucherNumber' : deposit.voucherNumber,
            'description' : deposit.description,
            'amount' : deposit.amount,
            'date' : deposit.date,
            'bankAcctNum' : deposit.bankAcctNum
        }
        return newDepositEntry;
    }
});

admin.service('employeeBuilder', function () {
    this.buildEmployeeEntry = function (employee) {
        var newEmployeeEntry = {
            'employeeNumber' : employee.number,
            'firstName' : employee.firstName,
            'middleInitial' : employee.middleInitial,
            'lastName' : employee.lastName,
            'userName' : employee.userName,
            'password' : employee.password
        }
        return newEmployeeEntry;
    }
});

admin.controller('AdminController', function($scope, depositBuilder, employeeBuilder) {

    /*
        ADD DEPOSIT ENTRY
     */

    //Event Date Picker
    $scope.dateFormat = 'dd-MMMM-yyyy';

    var getCurrentDate = function () {
        return new Date();
    };
    $scope.initDate = function () {
        $scope.depositDate = getCurrentDate().setDate(getCurrentDate().getDate() + 2);
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.openDatePicker = function () {
        $scope.opened = true;
    };

    //Create deposit entry
    $scope.createDepositEntry = function () {
        depositBuilder.buildDepositEntry($scope.deposit);
    };

    /*
        ADD EMPLOYEE ENTRY
     */

    $scope.createEmployeeEntry = function () {
        employeeBuilder.buildEmployeeEntry($scope.employee);
    }

});