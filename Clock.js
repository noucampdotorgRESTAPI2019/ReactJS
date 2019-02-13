import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
        setInterval(this.tick,1000);
    }
    tick() {
        this.setState( { date: new Date() });
    }
    render() {
        return (
          <div>{this.state.date.toLocaleTimeString()}</div>
        );
    }
}
export default Clock;
  