import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FavoritesList from '../../favorites-list/favorites-list';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import {getFavoriteOffers} from '../../../store/selectors';

const FavoritesPage = (props) => {
  const {offers} = props;
  return (
    <React.Fragment>
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesList offers={offers}/>
              </ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state)
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
