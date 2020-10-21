import React from "react";
import PropTypes from 'prop-types';
import CardFavorite from '../../cards/card-favorite/card-favorite';
import Header from "../../header/header";
import Footer from "../../footer/footer";

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
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => (
                      <CardFavorite
                        offer={offer}
                        key={offer.id}/>
                    ))}
                  </div>
                </li>
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

export default FavoritesPage;
