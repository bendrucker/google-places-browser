'use strict'

var test = require('tape')
var Autocomplete = require('./autocomplete')
var Places = require('./places')

test('autocomplete', function (t) {
  t.plan(2)

  var autocomplete = Autocomplete(Google())

  autocomplete.place({input: 'San Francisco'}, function (err, data) {
    if (err) return t.end(err)
    t.deepEqual(data, [{place_id: 'abc'}])
  })

  function Google () {
    return {
      maps: {
        places: {
          AutocompleteService: function () {
            return {
              getPlacePredictions: function (data, callback) {
                t.deepEqual(data, {input: 'San Francisco'})
                callback([{place_id: 'abc'}], 'OK')
              }
            }
          }
        }
      }
    }
  }
})

test('places', function (t) {
  t.plan(2)

  var places = Places(Google())

  places.details({placeId: 'abc'}, function (err, data) {
    if (err) return t.end(err)
    t.deepEqual(data, {place_id: 'abc'})
  })

  function Google () {
    return {
      maps: {
        places: {
          PlacesService: function () {
            return {
              getDetails: function (data, callback) {
                t.deepEqual(data, {placeId: 'abc'})
                callback({place_id: 'abc'}, 'OK')
              }
            }
          }
        }
      }
    }
  }
})

test('error handling', function (t) {
  t.plan(2)

  var places = Places(Google())

  places.details({}, function (err, data) {
    t.equal(err.message, 'Google places error: OVER_QUERY_LIMIT')
    t.equal(err.code, 'OVER_QUERY_LIMIT')
  })

  function Google () {
    return {
      maps: {
        places: {
          PlacesService: function () {
            return {
              getDetails: function (data, callback) {
                callback(null, 'OVER_QUERY_LIMIT')
              }
            }
          }
        }
      }
    }
  }
})
