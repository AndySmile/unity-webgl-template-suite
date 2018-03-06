/**
 * @class ElementHelper
 */
var ElementHelper = (function() 
{
    'use strict';

    function getElement(id)
    {
        var element = document.getElementById(id);
        
        if (element == null) {
            throw new Error('Element "' + id + '" does not exist!');
        }

        return element;
    };

    return {
        'hide': function(id) 
        {
            var element = getElement(id);
            
            if (element.className.indexOf('hide') == -1) {
                element.className += ' hide';
            }
        },

        'show': function(id)
        {
            var element = getElement(id);

            element.className = element.className.replace('hide', '');
        },

        'setTextContent': function(id, content)
        {
            var element = getElement(id);

            element.innerHTML = content;
        }
    };
})();