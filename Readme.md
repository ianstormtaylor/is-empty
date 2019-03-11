
> **Archived:** I wrote this package quite a while ago, and I'd consider it an anti-pattern. The main use case for it is checking if an object is empty, which can be done with [`lodash.isEmpty`](https://lodash.com/docs/4.17.11#isEmpty) instead. In many other cases, it's easier and more clear for people reading your code to just check `val.length === 0` or `val.size === 0` instead of using a separate package for it. And people continue to ask for more things to be considered "empty" over time, which are breaking changes, and just make it harder to understand what the API this package really offers is. For that reason, I've archived this package and I don't recommend using it anymore.

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
empty(null);            // true
empty(undefined);       // true
empty(new Map());       // true
empty(new Set());       // true
empty(new Error());     // true

empty(0);               // false
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
- ***Shell***: `npm test`
- ***Browser***: `npm run build:test` then open file `runner.html` in the browser

## License

  MIT
