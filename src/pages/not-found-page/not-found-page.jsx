import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundPage = () => {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">Page not found</b>
              <p className="cities__status-description">
                Click button to visit the main page
              </p>
              <Link to={AppRoute.MAIN} className="button form__submit">
                Go to the main page
              </Link>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
