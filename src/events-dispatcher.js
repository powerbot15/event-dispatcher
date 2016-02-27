
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
            if(self.listeners.hasOwnProperty(event)){
                for(var i = 0; i < self.listeners.length; i++){
                    if(self.listeners[i].callback.toString() == listenerCallback.toString()){
                        self.listeners.splice(i, 1);
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
            var eventListener;
            if(self.listeners.hasOwnProperty(event)){
                eventListener = self.listeners[event];
                eventListener.callback.apply(eventListener.context, callbackData);
            }
        })
    }



};

