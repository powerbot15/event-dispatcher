# Events Dispatcher
## Easy handling of custom logical events
 
 Event dispatcher is a lightweight frontend javascript module for custom events handling.
 

### Usage:
```javascript
var dispatcher = new EventsDispatcher();
```
**Events dispatcher uses jQuery like events handling notation**

```javascript

dispatcher.on('dataLoaded dataUpdated', callback, context);

...

dispatcher.trigger('dataLoaded', dataToCallback1, ... ,  dataToCallbackN);

...

dispatcher.trigger('dataUpdated', dataToCallback1, ... ,  dataToCallbackN);
```
    