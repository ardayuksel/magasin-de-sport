import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      mapCenter: {
        lat: 40.9985388,
        lng: 28.8843179,
      },
    };
  }
  // I didn't enabled billing account for Google Map API
  render() {
    return (
      <div id="googleMap">
        <Map
          style={{ width: "100%", height: "100%" }}
          google={this.props.google}
          initialCenter={this.state.mapCenter}
        >
          <Marker position={this.state.mapCenter} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD0adw5PI3R6E0PHv3s8-3YB7EZVblryGo",
})(MapContainer);
