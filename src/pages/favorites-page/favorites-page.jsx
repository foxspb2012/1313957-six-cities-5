import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {getGroupedByCityFavoriteOffers} from '../../store/offers/selectors';

const FavoritesPage = ({citiesToOffersMap}) => {

  const offerGroups = Array.from(citiesToOffersMap);
  const favoritesClassName = `page ${offerGroups.length ? `` : `page--favorites-empty`}`;
  const mainClassName = `page__main page__main--favorites ${offerGroups.length ? `` : `page__main--favorites-empty`}`;

  return (
    <div className={favoritesClassName}>
      <Header/>
      <main className={mainClassName}>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={citiesToOffersMap}/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  citiesToOffersMap: getGroupedByCityFavoriteOffers(state),
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);

FavoritesPage.propTypes = {
  citiesToOffersMap: PropTypes.objectOf(PropTypes.object)
};
