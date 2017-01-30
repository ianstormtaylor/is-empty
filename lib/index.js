
/**
 * Has own property.
 */

var has = Object.prototype.hasOwnProperty

/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty(val) {
  // Null and Undefined...
  if (null == val) return true

  // Booleans...
  if ('boolean' == typeof val) return false

  // Numbers...
  if ('number' == typeof val) return 0 === val

  // Maps, Sets, Files and Errors...
  if (val.toString) {
    const string = val.toString()

    if (
      string == '[object Map]' ||
      string == '[object Set]' ||
      string == '[object File]'
    ) {
      return !val.size
    }

    if (string.startsWith('Error')) {
      return !val.message
    }
  }

  // Plain objects...
  for (var key in val) {
    if (has.call(val, key)) return false
  }

  // Arrays...
  if (undefined !== val.length) return 0 === val.length

  // Nothing...
  return true
}

/**
 * Export `isEmpty`.
 *
 * @type {Function}
 */

module.exports = isEmpty
