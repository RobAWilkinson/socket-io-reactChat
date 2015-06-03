var React = require('react');
var Chatbox = require('./js/ChatboxComponent');
var Calendar = require('./js/CalendarComponent');
var Input = require('./js/InputComponent');

// renders both the CalendarComponent and ChatboxComponent next to each other
var App = React.createClass({
  getInitialState: function(){
    return({messages: []});
  },
  handleMessage: function(text) {
    var newArray = this.state.messages;
    newArray.push(text);
    this.setState({messages: newArray});
    console.log(this.state);
  },
  render: function() {
    return (
      <div>
      <Calendar/>
      <Chatbox messages={this.state.messages}/>
      <Input handleMessage={this.handleMessage}/>
      </div>
    );
  }
});

// attaches the App Component (which contains the CalendarComponent and ChatboxComponent) to the body of the page
React.render(<App/>, document.body);
