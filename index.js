
/**
 * Expose `isEmpty`.
 */

module.exports = isEmpty;


/**
 * Has.
 */

var has = Object.prototype.hasOwnProperty;


/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty (val) {
  if (null == val) return true;
  if ('boolean' == typeof val) return false;
  if ('number' == typeof val) return 0 === val;
  if (val.toString) { 
    if (
      val.toString() === '[object Map]' ||
      val.toString() === '[object Set]' ||
      val.toString() === '[object File]'
    ) return !val.size;
  }
  for (var key in val) if (has.call(val, key)) return false;
  if (undefined !== val.length) return 0 === val.length;
  return true;
}
