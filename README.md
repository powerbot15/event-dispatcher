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
**Events dispatcher uses jQuery like events handling notation**

```javascript

dispatcher.on('dataLoaded dataUpdated', callback, context);

...

dispatcher.trigger('dataLoaded', dataObject1, ... ,  dataObjectN);

...

dispatcher.trigger('dataUpdated', dataObject1, ... ,  dataObjectN);
```

Data objects deliver to all of attached to event listeners as their arguments
    