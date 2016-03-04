define([
    'demo/app/module-1',
    'demo/app/module-2',
    'demo/app/dispatcher'
], function(

    module1,
    module2,
    dispatcher

){

    return {
        startApp : function(){
            module1.init();

            module2.init();

            dispatcher.trigger('customImportantEvent', {
                message : 'Custom event occurred in the controller'
            });

            //Listener defined in the module-2.js

            dispatcher.trigger('onlyOnce', {
                message : 'This printed only once during app working'
            });

            dispatcher.trigger('onlyOnce', {
                message : 'This newer prints'
            })
        }
    }

});