var jsdom = require('mocha-jsdom');

describe('React Calendar Spec', function() {
  jsdom();
  require('./CalendarComponentSpec');
  require('./ChatboxComponentSpec');
});