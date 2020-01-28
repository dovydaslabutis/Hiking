import React from 'react';
import Navbar from 'components/Header/NavBar';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 55.146115, lng: 23.79204 }}
    />
  );
}

const WrapperdMap = withScriptjs(withGoogleMap(Map));

export default function ListPage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      <WrapperdMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBWjadzeVNNDCooZWv31v41ycKecfKVGU&callback=Map"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
