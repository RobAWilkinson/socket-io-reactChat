var React = require('react/addons');
var Unit = require('./UnitComponent');

var Calendar = React.createClass({
  render: function() {
    return (
      <Unit message="UNITS GO HERE"/>
    );
  }
});

module.exports = Calendar;