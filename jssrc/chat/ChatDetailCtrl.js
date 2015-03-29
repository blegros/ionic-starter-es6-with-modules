export class ChatDetailCtrl {
    constructor($scope, $stateParams, Chats) {
        this.$inject = ['$scope', '$stateParams', 'Chats'];
        $scope.chat = Chats.get($stateParams.chatId);
    }
}
