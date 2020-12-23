import React, { Component } from 'react';
import List from "./List"
import Conversation from "./Conversation"

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura", convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" }
          ]
        },
        {
          with: "Dad", convo: [
            { text: "Have you finished your school work yet?", sender: "other" },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" }
          ]
        },
        {
          with: "Shoobert", convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ]
        }
      ]
    }
  }

  displayConvo = name=> {
     this.setState({
      displayConversations: name
     })
    }
  
render() {
  return (
    <div >
      {this.state.displayConversation ? <Conversation /> :
       <List key={Math.random()} contacts={this.state.conversations.map(c => c.with)} displayConvo={this.displayConvo} />}
    </div>
  );
}
  // render() {
  //   return (
  //     <div >
  //       {this.state.displayConversations ? <Conversation /> :
  //        this.state.conversations.map(c=>{return(<List  key={Math.random()} contacts={c.with}/>)})}
  //     </div>
  //   );
  // }

}
export default Exercise2;
