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
            })
        }
    }

});