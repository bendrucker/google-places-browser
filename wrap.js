'use strict'

module.exports = wrap

function wrap (callback) {
  return function googleErrback (result, status, pagination) {
    if (status === 'OK') return callback(null, result, pagination)
    var err = new Error('Google places error: ' + status)
    err.code = status
    return callback(err)
  }
}
