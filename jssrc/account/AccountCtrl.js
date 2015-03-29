export class AccountCtrl {
    constructor($scope) {
        this.$inject = ['$scope'];

        $scope.settings = {
            enableFriends: true
        };
    }
}