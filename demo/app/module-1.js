define([
    'demo/app/dispatcher'
], function(
    dispatcher
){

   return {

       init : function(){
           this.name = 'Module 1';
           this.el = document.getElementById('module-1');
           this.listenEvents();
       },

       listenEvents : function(){
           dispatcher.on('customImportantEvent', this.controllerEventListener, this);
       },

       controllerEventListener : function(data){
           var msgElement = this.el.querySelector('[data-message]'),
               outPrint = this.name + ' : ' + data.message;

           if(msgElement){
               msgElement.textContent = outPrint;
           }
           else{
               console.log(outPrint);
           }
       }

   }
});