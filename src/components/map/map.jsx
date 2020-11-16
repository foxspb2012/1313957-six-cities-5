import React from 'react';
import withMap from '../../hocs/with-map/with-map';

const Map = () => {
  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

export default withMap(Map);
