/* global describe */
/* global it */

const WeatherEmoticon = require('../build/index.js');
const assert = require('chai').assert;

describe('WeatherUnderground', () => {
  describe('.request', () => {
    it('should return ❓ for an undefined parameter', (done) => {
      assert.equal(WeatherEmoticon().get(), '❓');
      done();
    });
    it('should return ☀️  for clear', (done) => {
      const clearEmoticon = WeatherEmoticon().get('clear');
      assert.equal(clearEmoticon, '☀️');
      done();
    });
    it('should return 🌤  for partly cloudy', (done) => {
      const partlyCloudyEmoticon = WeatherEmoticon().get('partly cloudy');
      assert.equal(partlyCloudyEmoticon, '🌤');
      done();
    });
    it('should return ⛅️  for mostly cloudy', (done) => {
      const mostlyCloudyEmoticon = WeatherEmoticon().get('mostly cloudy');
      assert.equal(mostlyCloudyEmoticon, '⛅️');
      done();
    });
    it('should be ignorant of case', (done) => {
      const clearEmoticon1 = WeatherEmoticon().get('clear');
      const clearEmoticon2 = WeatherEmoticon().get('Clear');
      assert.equal(clearEmoticon2, clearEmoticon1);
      done();
    });
    it('should be ignorant of underscore spacing', (done) => {
      const emoticon1 = WeatherEmoticon().get('partly cloudy');
      const emoticon2 = WeatherEmoticon().get('partly_cloudy');
      assert.equal(emoticon2, emoticon1);
      done();
    });
    it('should be ignorant of kebab casing', (done) => {
      const emoticon1 = WeatherEmoticon().get('partly-cloudy');
      const emoticon2 = WeatherEmoticon().get('partly Cloudy');
      assert.equal(emoticon2, emoticon1);
      done();
    });
  });
});
