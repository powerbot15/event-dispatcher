# Events Dispatcher

## Easy handling of the custom logical events
 

 Event dispatcher is a lightweight javascript module for custom events handling in **both Node.js and frontend javascript**.

 
### Installation

In the project directory:

```
npm install events-dispatcher
```

### Usage:

#### Node.js

Dispatcher module for Node.js provides already created instance of ```Dispatcher``` class

```javascript
var dispatcher = require('events-dispatcher');

dispatcher.on(eventName, callback, context);

function callback(dataArg1, ..., dataArgN){
    ...
}

...

dispatcher.trigger(eventName, dataArg1, ..., dataArgN)

```
#### HTML:

Fill free to change module path for your own project structure
```HTML
<script src="/node_modules/events-dispatcher/events-dispatcher.js"></script>
```
#### JavaScript:

```javascript
var dispatcher = new EventsDispatcher();
```

### Interface

 **Events dispatcher uses jQuery like events handling notation BUT enables you to pass a custom context to callbacks as `this`**
 
 **_Notice:_** _when_ `context` _is not defined, dispatcher passes_ `window` _or_ `global` _as context to callbacks_

___

```javascript
    dispatcher.on( eventName, callback [, context] )
```

 ```eventName``` - Space separated string with events' names ```'eventA eventB eventC'``` to be listened 
 ```callback``` - Callback to be fired when event triggered
 ```context``` - Not required argument to be a context of the fired event callback 

___

```javascript
    dispatcher.once( eventName, callback [, context] )
```

 
 Same as `dispatcher.on()` method but attached callbacks will be fired only once and then destroyed
 
___

```javascript
    dispatcher.deBouncedOn(delay, eventName, callback [, context]);
```

 `deBouncedOn` method allows attach to event debounced callbacks. Such callback will be fired only if within `delay` in milliseconds listened `event` was not fired. If event was fired during the delay, timer refreshed and callback waiting when same delay will finish 

 `delay` - Delay in milliseconds to wait for event firings
 `eventName` - Space separated string with events' names `'eventA eventB eventC'` to be listened 
 `callback` - Callback to be fired after `delay` time from the moment event triggered
 `context` - Not required argument to be a context of the fired event callback  

___

```javascript
    dispatcher.off(eventName [, callback]);
```

 `eventName` - Space separated string with events' names `'eventA eventB eventC'`, which callbacks will be removed
 `callback` - callback function to detach from event callbacks, if not passed, all callbacks of the event will be removed

___
   
```javascript
    dispatcher.trigger(eventName [, dataArg1, ... ,  dataArgN]);
```

 `trigger()` method fires all attached to event callbacks and debounced callbacks 

 `eventName` - Space separated string with events' names `'eventA eventB eventC'` to be listened 
 `dataArg1-dataArgN` - Comma-separated data objects(arrays) to pass as parameters to event callbacks

