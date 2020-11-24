import React, {PureComponent} from 'react';
import Leaflet from 'leaflet';
import * as Type from '../../prop-types';
import {connect} from 'react-redux';
import {getActiveOffer} from '../../store/app/selectors';
import {getOfferLocationActive} from '../../utils';
import {withLoad} from '../../hocs/with-load';

const LAYER_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const LAYER_ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;
const ICON_URL = `img/pin.svg`;
const ACTIVE_ICON_URL = `img/pin-active.svg`;
const ICON_SIZE = [27, 39];

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    this._markers = null;
  }

  componentDidMount() {
    const {centerCoordinates} = this.props;

    this._map = Leaflet.map(`map`, {
      center: centerCoordinates.coordinates,
      zoom: centerCoordinates.zoom,
      zoomControl: true,
      marker: true
    });

    Leaflet.tileLayer(LAYER_URL, {attribution: LAYER_ATTRIBUTION}).addTo(this._map);

    this._updateMarkers();
  }

  componentDidUpdate(prevProps) {
    const {offers, activeOffer, centerCoordinates} = this.props;
    const isNeedUpdateCity = offers !== prevProps.offers;

    if (isNeedUpdateCity) {
      this._map.flyTo(centerCoordinates.coordinates, centerCoordinates.zoom);
    } else {
      const coordinatesActiveOffer = getOfferLocationActive(offers, activeOffer);
      this._map.flyTo(coordinatesActiveOffer.coordinates, coordinatesActiveOffer.zoom);
    }

    this._updateMarkers();
  }

  componentWillUnmount() {
    this._markers.forEach((marker) => marker.remove());
    this._map.remove();
  }

  _updateMarkers() {
    const {offers, activeOffer} = this.props;
    const icon = Leaflet.icon({
      iconUrl: ICON_URL,
      iconSize: ICON_SIZE
    });
    const activeIcon = Leaflet.icon({
      iconUrl: ACTIVE_ICON_URL,
      iconSize: ICON_SIZE
    });

    if (this._markers) {
      this._markers.forEach((marker) => marker.remove());
    }

    this._markers = offers.reduce((items, {id, location: {coordinates}}) => {
      const pin = Leaflet
        .marker(coordinates, {
          icon: id === activeOffer ? activeIcon : icon,
        });
      items.push(pin);

      return items;
    }, []);

    this._markers.forEach((marker) => marker.addTo(this._map));
  }

  render() {
    const {blockClassName} = this.props;

    return (
      <section id="map" className={`${blockClassName}__map map`} ></section>
    );
  }
}

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state)
});

Map.propTypes = {
  offers: Type.OFFERS_LIST,
  activeOffer: Type.ACTIVE_OFFER,
  blockClassName: Type.BLOCK_CLASS_NAME,
  centerCoordinates: Type.CITY_LOCATION,
};

export {Map};
export default connect(mapStateToProps)(withLoad(Map));
