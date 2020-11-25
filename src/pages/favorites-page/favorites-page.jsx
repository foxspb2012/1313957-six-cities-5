import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import Header from '../../components/header/header';
import NoFavorites from '../../components/no-favorites/no-favorites';
import {Operation as OffersOperation} from '../../store/offers/offers';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {getGroupedByCityFavoriteOffers, getIsLoadedFavoritesOffers} from '../../store/offers/selectors';

class FavoritesPage extends PureComponent {

  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {citiesToOffers, isLoadedFavoritesOffers} = this.props;
    const offerGroups = Object.entries(citiesToOffers);
    const favoritesClassName = `page ${offerGroups.length ? `` : `page--favorites-empty`}`;
    const mainClassName = `page__main page__main--favorites ${offerGroups.length ? `` : `page__main--favorites-empty`}`;
    const favoritesClassNameSection = `favorites ${offerGroups.length ? `` : `favorites--empty`}`;
    const emptyContent = !offerGroups.length ? <NoFavorites/> : null;

    return (
      <div className={favoritesClassName}>
        <Header/>
        <main className={mainClassName}>
          <div className="page__favorites-container container">
            <section className={favoritesClassNameSection}>
              <h1 className="favorites__title">Saved listing</h1>
              {emptyContent}
              <FavoritesList
                offers={offerGroups}
                isLoadedFavoritesOffers={isLoadedFavoritesOffers}
              />
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    );
  }
}

FavoritesPage.propTypes = {
  citiesToOffers: Type.CITY_TO_OFFERS,
  loadFavoriteOffers: Type.FUNCTION,
  isLoadedFavoritesOffers: Type.FLAG,
};

const mapStateToProps = (state) => ({
  citiesToOffers: getGroupedByCityFavoriteOffers(state),
  isLoadedFavoritesOffers: getIsLoadedFavoritesOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers: () => dispatch(OffersOperation.loadFavoriteOffers())
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
