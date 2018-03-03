/**
 * @module ProgressBar
 */
var ProgressBar = (function() 
{
    'use strict';

    function hide(id)
    {
        var element = document.getElementById(id);

        if (element != null && element.className.indexOf('hide') == -1) {
            element.className += ' hide';
        }
    };

    function updateFillElement(id, status)
    {
        var element = document.getElementById(id);

        if (element != null) {
            element.width = (100 * status) + '%';
        }
    };

    return {
        onProgress: function(instance, status)
        {
            if (status == 1) {
                hide('progress-bar');
            } else {
                updateFillElement('progress-bar-fill', status);
            }
        }
    };
})();