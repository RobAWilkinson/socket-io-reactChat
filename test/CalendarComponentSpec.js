'use strict';

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Calendar = require('./../client/js/CalendarComponent');
var Unit = require('./../client/js/UnitComponent');

describe('Calendar Component Spec', function() {
  // jsdom();

  describe('CalendarComponent', function() {
      it('CalendarComponent should be a react component', function() {
        TestUtils.isCompositeComponent(<Calendar/>);
      });

      it('should tell use it is a demo component', function() {
        var calendarComponent = TestUtils.renderIntoDocument(<Calendar/>);
        var units = TestUtils.scryRenderedDOMComponentsWithClass(calendarComponent, 'div');
        expect(units).to.have.length(0)
      });
  });
  xdescribe('UnitComponent', function() {
    it('UnitComponent should be a react component', function() {
      TestUtils.isCompositeComponent(<Unit/>);
    });
  });
});
