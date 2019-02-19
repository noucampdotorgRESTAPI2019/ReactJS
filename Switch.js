import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <p>The switch is off</p>
      </div>
    );
  }
  toggle = () => {
    this.setState( { on: !this.state.on } );
  }
}
export default Switch;