import React from 'react';

class AutoTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.props.value };
  }

  render() {
    return (
      <div>
        {this.state.time}
      </div>
    );
  }

  componentDidMount() { 
    
  }
    
  tick = () => {
    if(this.state.time===0)
      return;
    this.setState( { time: this.state.time-1 } );
  }
  
  componentWillUnmount() {    
    
  }

}

export default AutoTimer;