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

  _renderMarkers() {
    const {offers, activeCardId} = this.props;
    const iconSize = [30, 30];
    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize
    });
    const activeIcon = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize
    });

    offers.forEach((offer) => {
      const coords = [offer.location.latitude, offer.location.longitude];
      if (offer.id === activeCardId) {
        leaflet
        .marker(coords, {icon: activeIcon})
        .addTo(this._map);
      } else {
        leaflet
        .marker(coords, {icon})
        .addTo(this._map);
      }
    });
  }

  _renderMap() {
    const {city} = this.props;
    const center = CityPoints[city.toUpperCase()];
    const zoom = 12;
    const map = leaflet.map(`map`, {
      zoom,
      center,
      zoomControl: false,
      marker: true
    });

    this._map = map;

    map.setView(center, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this._renderMarkers();
  }

  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this._map.remove();
      this._renderMap();
    } else {
      this._renderMarkers();
    }
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