# google-places-browser [![Build Status](https://travis-ci.org/bendrucker/google-places-browser.svg?branch=master)](https://travis-ci.org/bendrucker/google-places-browser)

> Google place API client for the browser


## Install

```
$ npm install --save google-places-browser
```


## Usage

```js
var Autocomplete = require('google-places-browser/autocomplete')
var Places = require('google-places-browser/places')

var autocomplete = Autocomplete(window.google)
var places = Places(window.google)

autocomplete.places({input: 'San Francisco'}, function (err, results) {
  //=> handle err/result array  
})

places.details({placeId: 'id'}, function (err, place) {
  //=> handle err/place  
})
```

## API

All API methods wrap Google's callback in Node-style (`err, args...`) errbacks. Errors have a `code` property that exposes the [the returned service status](https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlacesServiceStatus).

#### `Places(google)` -> `object`

##### google

*Required*  
Type: `object`

The [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/).

Returns an alternate place API with the following methods that wrap the [`PlacesService` class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlacesService):

* details
* nearby
* radar
* text

#### `Autocomplete(google)` -> `object`

##### google

*Required*  
Type: `object`

The [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/).

Returns an alternate autocomplete API with the following methods that wrap the [`AutocompleteService` class](https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlacesService):

* place
* query


## License

MIT © [Ben Drucker](http://bendrucker.me)
