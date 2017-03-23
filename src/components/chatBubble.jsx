import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './ChatBubble.css';
class ChatBubble extends Component {
  constructor() {
    super();
    this.state={
     messages:[{
        "type" : 0,
        "image": "cat.jpg",
        "text": "Hello! Good Morning!"
        }, {
        "type": 1,
        "image": "dog.jpg",
        "text": "Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!Hello! Good Afternoon!"
        }]
  };
  }
  getConversations(){
    //console.log(this.messages.text);
    if(this.state.messages == undefined){
      console.log("react-chat-bubble::", "'messages' props should be an array!");
      return;
    }
    const listItems = this.state.messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';
      if(message.type === 0){
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";
      }
      return (
              <div className={`bubble-container ${bubbleDirection}`} key={index}>
                <img className={`img-circle`} src={message.image} />
                <div className={`bubble ${bubbleClass}`}>{message.text}</div>
              </div>
          );
    });
    return listItems;
  }
  render() {
    const {messages} = this.props;
    const chatList = this.getConversations();
    return (
    <Paper>
      <div className="chats">
        {chatList}
      </div>
      </Paper>
    );
  }
}
ChatBubble.propTypes = {
  messages: React.PropTypes.array
};
export default ChatBubble;