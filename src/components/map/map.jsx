import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {CityPoints} from '../../const';
import '../../../node_modules/leaflet/dist/leaflet.css';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
  }

  _renderMap() {
    const {city, offers, activeCardId} = this.props;
    const center = CityPoints[city.toUpperCase()];
    const iconSize = [30, 30];
    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize
    });
    const activeIcon = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      zoom,
      center,
      zoomControl: false,
      marker: true
    });

    map.setView(center, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      if (offer.id === activeCardId) {
        leaflet
        .marker(offer.coords, {icon: activeIcon})
        .addTo(map);
      } else {
        leaflet
        .marker(offer.coords, {icon})
        .addTo(map);
      }
    });

    this._map = map;
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this._map.remove();
    this._renderMap();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.string,
  offers: PropTypes.array,
  activeCardId: PropTypes.number
};

export default Map;

