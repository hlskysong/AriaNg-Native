(function () {
    'use strict';

    angular.module('ariaNg').factory('ariaNgKeyboardService', ['$window', function ($window) {
        var platform = '';

        if ($window.navigator && $window.navigator.userAgentData && $window.navigator.userAgentData.platform) {
            platform = $window.navigator.userAgentData.platform;
        } else if ($window.navigator && $window.navigator.platform) {
            platform = $window.navigator.platform;
        }

        var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(platform);

        var isModifierKeyPressed = function (event) {
            if (isMacLike) {
                return event.metaKey;
            } else {
                return event.ctrlKey;
            }
        };

        var getKeyCode = function (event) {
            return event.keyCode || event.which || event.charCode;
        };

        return {
            isMacKeyboardLike: function () {
                return isMacLike;
            },
            isCtrlAPressed: function (event) {
                return (isModifierKeyPressed(event) && (event.code === 'KeyA' || getKeyCode(event) === 65)); // Ctrl+A / Command+A
            },
            isCtrlFPressed: function (event) {
                return (isModifierKeyPressed(event) && (event.code === 'KeyF' || getKeyCode(event) === 70)); // Ctrl+F / Command+F
            },
            isCtrlNPressed: function (event) {
                return (isModifierKeyPressed(event) && (event.code === 'KeyN' || getKeyCode(event) === 78)); // Ctrl+N / Command+N
            },
            isCtrlEnterPressed: function (event) {
                return (isModifierKeyPressed(event) && (event.code === 'Enter' || getKeyCode(event) === 13)); // Ctrl+Enter / Command+Return
            },
            isDeletePressed: function (event) {
                return (event.code === 'Delete' || getKeyCode(event) === 46); // Delete
            }
        };
    }]);
}());
