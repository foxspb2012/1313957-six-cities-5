import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import {Operation as OffersOperation} from '../../store/offers/offers';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews';
import OfferList, {OffersListType} from '../../components/offer-list/offer-list';
import {getIsLoadedOffer, getIsLoadedNearOffers} from '../../store/offers/selectors';
import {getNearOffers, getMapOffers, getOneOffer} from '../../store/offers/selectors';
import OfferPageContent from '../../components/offer-page-content/offer-page-content';

class OfferPage extends PureComponent {
  componentDidMount() {
    this._update();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this._update();
    }
  }

  _update() {
    const {loadOneOffer, loadNearOffers, loadReviews} = this.props;
    loadOneOffer();
    loadNearOffers();
    loadReviews();
  }

  render() {
    const {mapOffers, nearOffers, offer, isLoadedOffer, isLoadedNearOffers} = this.props;
    const {location} = offer;

    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <OfferPageContent
              offer={offer}
              isLoaded={isLoadedOffer}
            />
            <Map
              blockClassName={`property`}
              centerCoordinates={location}
              offers={mapOffers}
              isLoaded={isLoadedOffer && isLoadedNearOffers}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                      Other places in the neighbourhood
              </h2>
              <OfferList
                typeClass={OffersListType.NEAR}
                offers={nearOffers}
                isLoaded={isLoadedNearOffers}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferPage.propTypes = {
  id: Type.ID,
  mapOffers: Type.OFFERS_LIST,
  offer: Type.OFFER,
  isLoadedOffer: Type.FLAG,
  isLoadedNearOffers: Type.FLAG,
  nearOffers: Type.OFFERS_LIST,
  loadOneOffer: Type.FUNCTION,
  loadNearOffers: Type.FUNCTION,
  loadReviews: Type.FUNCTION,
  newId: Type.ID,
  oldId: Type.ID,
};

const mapStateToProps = (state) => ({
  mapOffers: getMapOffers(state),
  offer: getOneOffer(state),
  nearOffers: getNearOffers(state),
  isLoadedOffer: getIsLoadedOffer(state),
  isLoadedNearOffers: getIsLoadedNearOffers(state),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  loadOneOffer: () => {
    dispatch(OffersOperation.loadOneOffer(id));
  },
  loadNearOffers: () => {
    dispatch(OffersOperation.loadNearOffers(id));
  },
  loadReviews: () => {
    dispatch(ReviewsOperation.loadReviews(id));
  },
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
