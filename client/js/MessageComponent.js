var React = require('react');

// parent: Message
var Message = React.createClass({
  render: function() {
    return (
      <div>
      {this.props.content}
      </div>
    );
  }
});

module.exports = Message;
