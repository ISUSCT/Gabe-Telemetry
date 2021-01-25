import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: -80,
      lng: 40
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC3JxqNyXYRbMt2hlpTrlf8Uj2HoJ-UA18' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-88.99346}
            lng={40.5120}
            text="Car Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GMap;