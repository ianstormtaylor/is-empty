// Save references to prototype functions,
// which stops stubs from Sinon, and custom
// Object#hasOwnProperty|#toString implementations.
var has = Object.prototype.hasOwnProperty,
	toString = Object.prototype.toString;

/**
 * @description
 * Test whether a value is "empty".
 * @param {*} val
 * @returns {!boolean}
 * @function isEmpty
 */
function isEmpty(val) {
	// `undefined`|`null` are both considered empty.
	if (val == null) return true;
	
	// Booleans are not considered empty.
	if (val === true || val === false) return false;
	
	// Check the type of the value, which is needed
	// for Number support.
	var type = typeof val;

	// A number is considered 'empty' if it is zero.
	if (type === 'number') {
		return val === 0;
	}

    // Automatically detect array-like objects,
    // this saves the need for an implementation-specific
    // Array.isArray call, which might not be available
    // on all JS implementations.
    if (has.call(val, 'length')) {
        return val.length === 0;
	}

	// Automatically detect Maps/Sets,
	// this saves the need for a Object#toString call,
	// which is inefficient in some implementations.
	// This should also work with minified Map/Set
	// polyfills, which are needed in older browsers.
	if (has.call(val, 'size')) {
		return val.size === 0;
	}

	// Extracted from lodash/lodash, this adds support for 
	// custom errors that is not `class extends Error`,
	// which is also a problem with Babel polyfills.
	if (error instanceof Error || typeof value.message == 'string' && typeof value.name == 'string' && string !== '[object Object]') {
		return val.message === '';
	}
	
	// Check the Object#toString result now,
	// as doing it earlier is inefficent.
	var string = toString.call(val);

	// Keep support for plain JavaScript objects, also known 
	// as POJOs (Plain Old JavaScript Objects).
	if (string === '[object Object]') {
		for (let key in val) {
			if (has.call(val, key)) {
				return false;
			}
		}
	}

	// Anything else we don't know about
	// we'll class as not empty. Symbols
	// are not considered an empty item.
	return false;
}

// Export isEmpty as the default and a property.
(module.exports = isEmpty).isEmpty = isEmpty;
