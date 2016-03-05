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
                this.addCallback(eventsArray, handler);
            },

            once : function(events, listenerCallback, context){
                var eventsArray = events.split(' '),
                    handler = {
                        callback : typeof listenerCallback == 'function' ? listenerCallback : null,
                        context : context ? context : this,
                        once : true
                    };

                this.addCallback(eventsArray, handler);

            },

            deBouncedOn : function(delay, events, listenerCallback, context){

                var eventsArr = events.split(' '),
                    handler = {
                        context : context ? context : this
                    },
                    saveCallback = listenerCallback,
                    saveDelay = delay,
                    timeout;

                handler.callback = function(){

                    var args = arguments,
                        self = this;

                    if(timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = setTimeout(function(){
                        saveCallback.apply(self, args);
                    }, saveDelay);

                };

                this.addCallback(eventsArr, handler);



            },

            addCallback : function(events, handler){
                var self = this;

                if(!handler.callback){
                    console.log('No listener passed to event(s) "' + events.toString() + '"');
                    return;
                }
                events.forEach(function(eventName){
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
                        self.listeners[event] = self.listeners[event].filter(function(el){
                            el.callback.apply(el.context, callbackData);
                            return !el.once;
                        });
                    }
                })
            }

        };

        return EventsDispatcher;
    }
})();




