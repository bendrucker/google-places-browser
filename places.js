'use strict'

var document = require('global/document')
var wrap = require('./wrap')

module.exports = Places

function Places (google) {
  var element = document.createElement('div')
  var places = new google.maps.places.PlacesService(element)

  return {
    details: details,
    nearby: nearby,
    radar: radar,
    text: text
  }

  function details (data, callback) {
    places.getDetails(data, wrap(callback))
  }

  function nearby (data, callback) {
    places.nearbySearch(data, wrap(callback))
  }

  function radar (data, callback) {
    places.radarSearch(data, wrap(callback))
  }

  function text (data, callback) {
    places.textSearch(data, wrap(callback))
  }
}
