import { lowerCase } from 'lodash';

const iconMap = {
  clear: '☀️',
  sunny: '☀️',
  overcast: '🌫',
  cloudy: '☁️',
  'partly cloudy': '🌤',
  'mostly cloudy': '⛅️',
  'scattered clouds': '🌤',
  'mostly sunny': '🌤',
  rain: '🌧',
  snow: '❄️',
  fog: '🌫',
  unknown: '❓',
};
module.exports = function WeatherEmoticon() {
  if (!(this instanceof WeatherEmoticon)) {
    return new WeatherEmoticon();
  }
  this.lowerCase = lowerCase;
  this.get = (weather) => {
    const weatherString = lowerCase(weather);
    const icon = iconMap[weatherString] || iconMap.unknown;
    return icon;
  };
};
