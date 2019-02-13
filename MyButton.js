import React from 'react';

class MyButton extends React.Component {
    constructor() {
      super();
      this.state = { caption: "hello" };
    }  
    render() {
      return (
        <button>{this.state.caption}</button>
      );
    }
}
export default MyButton;