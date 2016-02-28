require.config({
    'baseUrl' : '/event-dispatcher/',
    'paths' : {
        'global-dispatcher' : 'src/events-dispatcher'
    }
});

require([
    'demo/app/controller.js'
], function(
    controller
){
    controller.startApp();
});

