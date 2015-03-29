import {Chats} from 'Chats';

export class ChatDetailCtrl {
    constructor($stateParams) {
        this.chats = Chats.get($stateParams.chatId);
    }
}