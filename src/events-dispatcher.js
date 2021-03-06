;(function(){
    if (typeof define === 'function' && define.amd) {
        define([], dispatcherModule);
    }
    EventsDispatcher = dispatcherModule();

    function dispatcherModule(){
        function EventsDispatcher(){
            this.listeners = {};
        }

        EventsDispatcher.prototype = {

            on : function(events, listenerCallback, context){

                var handler = {
                        callback : typeof listenerCallback == 'function' ? listenerCallback : null,
                        context : context ? context : window || global || this
                    },
                    eventsArray = events.split(' '),
                    self = this;
                this.addCallback(eventsArray, handler);

                return this;
            },

            once : function(events, listenerCallback, context){
                var eventsArray = events.split(' '),
                    handler = {
                        callback : typeof listenerCallback == 'function' ? listenerCallback : null,
                        context : context ? context : window || global || this,
                        once : true
                    };

                this.addCallback(eventsArray, handler);

                return this;
            },

            deBouncedOn : function(delay, events, listenerCallback, context){

                var eventsArr = events.split(' '),
                    handler = {
                        context : context ? context : window || global || this
                    },
                    saveCallback = listenerCallback,
                    saveDelay = delay,
                    timeout;

                handler.callback = function(){

                    var args = arguments;

                    if(timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = setTimeout(function(){
                        saveCallback.apply(this, args);
                    }.bind(this), saveDelay);

                };

                this.addCallback(eventsArr, handler);

                return this;

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
                        if(!listenerCallback){
                            delete self.listeners[event];
                            return;
                        }
                        iterationListeners = self.listeners[event];
                        for(var i = 0; i < iterationListeners.length; i++){
                            if(iterationListeners[i].callback == listenerCallback || iterationListeners[i].callback.toString() == listenerCallback.toString()){
                                iterationListeners.splice(i, 1);
                                return;
                            }
                        }
                    }
                });

                return this;
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
                });

                return this;
            }

        };

        return EventsDispatcher;
    }
})();




