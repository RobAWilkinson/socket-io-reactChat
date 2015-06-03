var React = require('react');

var Input = React.createClass({
  getInitialState: function() {
    return({text: ''});
  },
  textChange: function() {
    var text = React.findDOMNode(this.refs.chatMessage).value.trim();
    this.setState({text: text});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleMessage(this.state.text);
    this.setState({text: ''});
    React.findDOMNode(this.refs.chatMessage).value = '';
  },
  render: function() {
    var text = this.state.text;
    return(
    <form onSubmit={this.handleSubmit}>
      <input type="text" ref="chatMessage" onChange={this.textChange}  placeholder="enter text"></input>
      <input type="Submit" value="Submit"></input>
    </form>
      );
  }
});
module.exports = Input
