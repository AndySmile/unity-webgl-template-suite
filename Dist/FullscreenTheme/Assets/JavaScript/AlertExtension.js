/**
 * @module AlertExtension
 * 
 * Replaces the alert function with a new one that uses
 * the MediaDialog to show the message in a way that fits
 * the application environment.
 */
(function()
{
    window.alert = function(message)
    {
        MessageDialog.onReceiveMessage(message);
    };
})();