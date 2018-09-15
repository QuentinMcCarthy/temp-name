import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


class GoogleMapsContainer extends React.Component {

  render() {
	  	const pos = {
		 	lat :-41.328075 ,
			lng:174.799973
	  	}
    return (
      <Map
        google = { this.props.google }
		disableDefaultUI = {true}
        zoom = { 14 }
        initialCenter = {{ lat: -41.328075, lng: 174.797316 }}
      >
        <Marker
			animation = {this.props.google.maps.Animation.DROP}
          	position = {pos}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDDZDbzY30ZhRhi2S4fER5I1HQbskuAs_U'
})(GoogleMapsContainer)