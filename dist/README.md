# Events Dispatcher
## Easy handling of custom logical events
 
 Event dispatcher is a lightweight frontend javascript module for custom events handling.
 
### Installation

In the project directory:

```
npm install events-dispatcher
```

### Usage:

#### HTML:

Fill free to change module path for your own project structure
```HTML
<script src="/node_modules/events-dispatcher/events-dispatcher.js"></script>
```
#### JavaScript:

```javascript
var dispatcher = new EventsDispatcher();
```
**Events dispatcher uses jQuery like events handling notation BUT enables you to pass a custom context to callback as `this`**

```javascript

dispatcher.on(eventName, callback, context);

...

dispatcher.once(eventName, callbackToExecuteOnce, context);

...

dispatcher.deBouncedOn(delay, eventName, callbackToDeBounce, context);

...

dispatcher.trigger(eventName, dataObject1, ... ,  dataObjectN);

...

dispatcher.off(event, callback);

```
Data objects deliver to all of attached to event listeners as their arguments

**Added `dispatcher.deBouncedOn(delay, events, callback, context)` method**

**Description**

Use it for preventing frequent calls of the `callback`. It waits `delay` in ms and if it was no attempts to call the `callback` during `delay` time, callback is fired. Otherwise debounce timer is being restarted and waiting `delay` period again 
 
 

    