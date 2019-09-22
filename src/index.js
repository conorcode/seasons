import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {

    
  }

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    }

    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
