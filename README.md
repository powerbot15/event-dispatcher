# Events Dispatcher
## Easy handling of custom logical events
 
 Event dispatcher is a lightweight frontend javascript module for custom events handling.
 
### Installation

In the project directory:

```
npm install events-dispatcher
```

### Usage:

#### HTML
```HTML
<script src="node_modules/events-dispatcher/events-dispatcher.js"></script>
```
#### JavaScript

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
    