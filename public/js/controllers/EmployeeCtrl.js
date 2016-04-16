/**
 * Created by chassiness on 3/11/16.
 */

employee = angular.module('EmployeeCtrl', []);

employee.controller('EmployeeController', function($scope, employeeBuilder) {

    /**
     * DEPOSIT HISTORY
     */

    $scope.today = function() {
        var nwDt = new Date();
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.dateOptions = {
        datepickerMode: 'month',
        type: 'month',
        formatYear: 'yy',
        formatMonth: 'MMMM',
        popupPlacement : 'auto bottom-right',
        datepickerConfig: 'yyyy-MMMM',
        minMode: 'month'
    };

    $scope.format = 'yyyy-MMMM';

    $scope.popup2 = {
        opened: false
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    function getDepositHistory() {
        //Employee.getDepositHistory(dt.getMonth()).success(function (data) {
        //    $scope.history = data;
        //});

        $scope.history = [
            {
                voucherNumber: 'A1234567890',
                description: 'For Project SHRH12764839.',
                amount: '1500',
                date: new Date().setMonth(2),
                account: 'L098573723'
            },
            {
                voucherNumber: 'B1234567890',
                description: 'For Project DHEK2843939395.',
                amount: '5500',
                date: new Date().setMonth(1),
                account: 'L098573723'
            }
        ];

        $scope.sortByDate = ['date', 'voucherNumber', 'amount'];
        $scope.sortByAmount = ['amount', 'date', 'voucherNumber'];
        $scope.sortByVoucherNumber = ['voucherNumber', 'date', 'amount'];
        $scope.sortType = $scope.sortByDate;
        $scope.depositCount = $scope.history.length;
    }

    getDepositHistory();


});
