import {Chats} from '../chat/Chats';

export class ChatsCtrl {
    constructor() {
        this.chats = Chats.all();
    }

    remove(chat) {
        Chats.remove(chat);
    }
}