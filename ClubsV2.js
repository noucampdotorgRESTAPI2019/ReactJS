import React from 'react';

class ClubsV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clubs: [] };
  }

  componentDidMount() {    
    fetch('http://localhost:5000/clubs.json')
        .then((data) => data.json())
        .then((data) => this.setState({clubs: data.clubs}));
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
export default ClubsV2;