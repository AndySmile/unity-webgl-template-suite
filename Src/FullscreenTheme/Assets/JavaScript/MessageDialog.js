var MessageDialog = (function()
{
    'use strict';

    function onReceiveMessage(message)
    {
        ElementHelper.show('message-dialog');
        ElementHelper.setTextContent('message-dialog-content', message);
    };

    function init()
    {
        var button = document.getElementById('message-dialog-button');
        
        if (button != null) {
            button.addEventListener('click', function() {
                ElementHelper.hide('message-dialog');
            });
        }

        window.alert = function(message)
        {
            onReceiveMessage(message);
        };
    };

    init();

    return {
        'onReceiveMessage': onReceiveMessage
    };
})();