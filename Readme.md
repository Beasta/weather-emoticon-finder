# weather-emoticon-finder

Retrieve weather emoticon for various weather conditions.

## Installation

```
npm install weather-emoticon-finder
```

## Usage
[RunKit Example using Weather Underground](https://runkit.com/590137ff1ce99600127a3fc5/5912b990b038140013ddb899)
```js

var WeatherEmoticonFinder = require('weather-emoticon-finder');
console.log(WeatherEmoticonFinder().get('clear'));
// ☀️
console.log(WeatherEmoticonFinder().get('foo'));
// ❓
```
## Running the tests

```
npm test
```

## License
MIT

