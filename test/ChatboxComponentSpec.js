'use strict';

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var CalendarComponent = require('./../client/js/CalendarComponent');
var Message = require('./../client/js/MessageComponent');

describe('Calendar Component Spec', function() {
  // jsdom();

  describe('CalendarComponent', function() {
      it('CalendarComponent should be a react component', function() {
        TestUtils.isCompositeComponent(<CalendarComponent/>);
      });

      it('should tell use it is a demo component', function() {
        var calendarComponent = TestUtils.renderIntoDocument(<CalendarComponent/>);
        var units = TestUtils.scryRenderedDOMComponentsWithClass(calendarComponent, 'div');
        expect(units).to.have.length(0)
      });
  });
  xdescribe('MessageComponent', function() {
    it('MessageComponent should be a react component', function() {
      TestUtils.isCompositeComponent(<Message/>);
    });
  });
});
