export class ChatsCtrl {
    constructor($scope, Chats) {
        this.$inject = ['$scope', 'Chats'];

        this.service = Chats;
        $scope.chats = this.service.all();
    }

    remove(chat) {
        this.service.remove(chat);
    }
}