;(function(){
    if (typeof define === 'function' && define.amd) {
        define([], dispatcherModule);
    } else {
        EventsDispatcher = dispatcherModule();
    }

    function dispatcherModule(){
        function EventsDispatcher(){
            this.listeners = {};
        }

        EventsDispatcher.prototype = {

            on : function(events, listenerCallback, context){

                var handler = {
                        callback : typeof listenerCallback == 'function' ? listenerCallback : null,
                        context : context ? context : this
                    },
                    eventsArray = events.split(' '),
                    self = this;
                if(!handler.callback){
                    console.log('No listener passed to event(s) "' + events.toString() + '"');
                    return;
                }
                eventsArray.forEach(function(eventName){
                    if(self.listeners.hasOwnProperty(eventName)){
                        self.listeners[eventName].push(handler);
                        return;
                    }
                    self.listeners[eventName] = [handler];
                })

            },

            off : function(events, listenerCallback){

                var eventsArray = events.split(' '),
                    self = this;

                eventsArray.forEach(function(event){
                    var iterationListeners;
                    if(self.listeners.hasOwnProperty(event)){
                        iterationListeners = self.listeners[event];
                        for(var i = 0; i < iterationListeners.length; i++){
                            if(iterationListeners[i].callback.toString() == listenerCallback.toString()){
                                iterationListeners.splice(i, 1);
                                return;
                            }
                        }
                    }
                })

            },

            trigger : function(events /*, callbackArg1, callbackArg2, ...*/){

                var eventsArray = events.split(' '),
                    callbackData = [],
                    self = this;
                if(arguments.length > 1){
                    for(var i = 1; i < arguments.length; i++){
                        callbackData.push(arguments[i]);
                    }

                }

                eventsArray.forEach(function(event){
                    var eventListeners;
                    if(self.listeners.hasOwnProperty(event)){
                        eventListeners = self.listeners[event];
                        for(var i = 0; i < eventListeners.length; i++){
                            eventListeners[i].callback.apply(eventListeners[i].context, callbackData);
                        }
                    }
                })
            }

        };

        return EventsDispatcher;
    }
})();




