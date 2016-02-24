'use strict'

var wrap = require('./wrap')

module.exports = Autocomplete

function Autocomplete (google) {
  var autocomplete = new google.maps.places.AutocompleteService()

  return {
    place: place,
    query: query
  }

  function place (data, callback) {
    autocomplete.getPlacePredictions(data, wrap(callback))
  }

  function query (data, callback) {
    autocomplete.getQueryPredictions(data, wrap(callback))
  }
}
