/**
 * @module ProgressBar
 */
var ProgressBar = (function() 
{
    'use strict';

    function updateFillElement(id, status)
    {
        var element = document.getElementById(id);

        if (element != null) {
            element.style.width = (100 * status) + '%';
        }
    };

    return {
        onProgress: function(instance, status)
        {
            if (status == 1) {
                ElementHelper.hide('progress-bar');
            } else {
                updateFillElement('progress-bar-fill', status);
            }
        }
    };
})();