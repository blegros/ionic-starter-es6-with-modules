"use strict";

function onReady($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}
"use strict";

function router($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state("tab", {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state("tab.dash", {
        url: "/dash",
        views: {
            "tab-dash": {
                templateUrl: "templates/tab-dash.html",
                controller: "DashCtrl"
            }
        }
    }).state("tab.chats", {
        url: "/chats",
        views: {
            "tab-chats": {
                templateUrl: "templates/tab-chats.html",
                controller: "ChatsCtrl"
            }
        }
    }).state("tab.chat-detail", {
        url: "/chats/:chatId",
        views: {
            "tab-chats": {
                templateUrl: "templates/chat-detail.html",
                controller: "ChatDetailCtrl"
            }
        }
    }).state("tab.account", {
        url: "/account",
        views: {
            "tab-account": {
                templateUrl: "templates/tab-account.html",
                controller: "AccountCtrl"
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/tab/dash");
}
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AccountCtrl = function AccountCtrl() {
    _classCallCheck(this, AccountCtrl);

    this.settings = {
        enableFriends: true
    };
};
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ChatDetailCtrl = function ChatDetailCtrl($stateParams) {
    _classCallCheck(this, ChatDetailCtrl);

    this.chats = Chats.get($stateParams.chatId);
};
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Some fake testing data
var chats = [{
    id: 0,
    name: "Ben Sparrow",
    lastText: "You on your way?",
    face: "https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"
}, {
    id: 1,
    name: "Max Lynx",
    lastText: "Hey, it's me",
    face: "https://avatars3.githubusercontent.com/u/11214?v=3&s=460"
}, {
    id: 2,
    name: "Andrew Jostlin",
    lastText: "Did you get the ice cream?",
    face: "https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg"
}, {
    id: 3,
    name: "Adam Bradleyson",
    lastText: "I should buy a boat",
    face: "https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"
}, {
    id: 4,
    name: "Perry Governor",
    lastText: "Look at my mukluks!",
    face: "https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"
}];

var Chats = (function () {
    function Chats() {
        _classCallCheck(this, Chats);
    }

    _createClass(Chats, {
        all: {
            value: function all() {
                return chats;
            }
        },
        remove: {
            value: function remove(chat) {
                chats.splice(chats.indexOf(chat), 1);
            }
        },
        get: {
            value: function get(chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        }
    });

    return Chats;
})();
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ChatsCtrl = (function () {
    function ChatsCtrl() {
        _classCallCheck(this, ChatsCtrl);

        this.chats = Chats.all();
    }

    _createClass(ChatsCtrl, {
        remove: {
            value: function remove(chat) {
                Chats.remove(chat);
            }
        }
    });

    return ChatsCtrl;
})();
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var DashCtrl = function DashCtrl() {
    _classCallCheck(this, DashCtrl);
};


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
"use strict";

angular.module("starter", ["ionic", "starter.controllers", "starter.services"]).config(router).run(onReady);

angular.module("starter.controllers", []).controller("DashCtrl", DashCtrl).controller("ChatsCtrl", ChatsCtrl).controller("ChatDetailCtrl", ChatDetailCtrl).controller("AccountCtrl", AccountCtrl);

angular.module("starter.services", []).service("Chats", Chats);
// Ionic Starter App
//# sourceMappingURL=all.js.map