
# is-empty

  Check whether a value is empty.

## Installation
  
```
$ npm install is-empty
$ npm test
```

## Example

```js
var empty = require('is-empty');

empty([]);              // true
empty({});              // true
empty('');              // true
empty(0);               // true
empty(null);            // true
empty(undefined);       // true
empty(new Map());       // true
empty(new Set());       // true
empty(new Error());     // true

empty(true);            // false
empty(false);           // false
empty(['a', 'b']);      // false
empty({ a: 'b' });      // false
empty('string');        // false
empty(42);              // false
empty(function(){});    // false see: #9
empty(function(a,b){}); // false
empty(new Map([['key', 'value']])); // false
empty(new Set([1]));    // false
empty(new Error('fail'))// false
```

## API

### isEmpty(value)

  Check whether `value` is empty.

## Testing
- ***[Shell]***: `npm test`
- ***[Browser]***: `npm run build:test` then open file `runner.html` in the browser

## License

  MIT
