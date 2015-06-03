var React = require('react');
var Message = require('./MessageComponent');

var Chatbox = React.createClass({
  render: function() {
    var messages = this.props.messages.map(function(message) {
      return(<Message content={message} />);
    });
    console.log(messages);
    return (
        <div>
          {messages}
        </div>
    )
  }
});

module.exports = Chatbox;
