define([
    'demo/app/dispatcher'
], function(
    dispatcher
){

   return {

       init : function(){
           this.name = 'Module 2';
           this.el = document.getElementById('module-2');
           this.deBounceResult = this.el.querySelector('[data-debounce-result]');
           this.listenEvents();
       },

       listenEvents : function(){

           dispatcher.on('customImportantEvent', this.controllerEventListener, this);

           dispatcher.deBouncedOn(500, 'newInput', this.deBouncedListener, this);

           dispatcher.once('onlyOnce', this.onlyOnceExecuted, this);

       },

       deBouncedListener : function(value){

           this.deBounceResult.innerText = value;

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

       },

       onlyOnceExecuted : function(data){

           var msgElement = this.el.querySelector('[data-once-message]'),
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