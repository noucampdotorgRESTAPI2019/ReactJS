import React from 'react';

class ChatApp extends React.Component {
  constructor() {
      super();
      this.state = {
          name: '', 
          message: '', 
          messages : [] };
  }

  render() {
    return (
        <div>
            <h1>Chat App</h1>
            <form onSubmit={this.submit}>
                <table>
                <tr>
                    <td><label>Name:</label></td>
                    <td><input type='text' value={this.state.name} onChange={this.handleNameChange}></input></td>
                </tr>
                <tr>
                    <td><label>Message:</label></td>
                    <td><input type='text' value={this.state.message} onChange={this.handleMessageChange}></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type='submit' value='Send'></input></td>
                </tr>
                </table>
            </form>
            <hr/>
            <div id='messages'>
                {this.state.messages.map( (item) => {
                    return <div><h3>{item.name}</h3><p>{item.message}</p></div>
                })}
            </div>
        </div>
    );
  }

  handleNameChange = (event) => {
    this.setState( { name: event.target.value } );
  }

  handleMessageChange = (event) => {
    this.setState( { message: event.target.value } );
  }

  submit = (event) => {
    this.setState( { messages: this.state.messages.concat([ { "name": this.state.name, "message": this.state.message } ]) } );

    // post message to ChatServer
    //
    // fetch('http://localhost:5000/message', 
    //       {
    //         method: 'POST',
    //         body: JSON.stringify({ "name": this.state.name, "message": this.state.message }), 
    //         headers:{ 'Content-Type': 'application/json' }
    //       });
    
    event.preventDefault();  // stop <form> from posting
  }

  componentDidMount() {    
    // get initial messages
    //


    // get messages every 5 seconds
    
  }

}

export default ChatApp;