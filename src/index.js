import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err2 => console.log(err2)
    );
  }

  render() {
    return (
      <div>
        <SeasonDisplay />
        Latitude: {this.state.lat}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
