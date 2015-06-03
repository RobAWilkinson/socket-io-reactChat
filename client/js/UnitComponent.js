var React = require('react');

// parent: Calendar
var Unit = React.createClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    )
  }
});

module.exports = Unit;