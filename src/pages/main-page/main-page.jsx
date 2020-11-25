import React from 'react';
import {connect} from 'react-redux';
import {EMPTY_CLASS} from '../../const';
import * as Type from '../../prop-types';
import Header from '../../components/header/header';
import NoOffers from '../../components/no-places/no-places';
import CitiesList from '../../components/cities-list/cities-list';
import {getFilteredAndSortedOffers} from '../../store/offers/selectors';
import MainContainer from '../../components/main-container/main-container';

const MainPage = ({offers}) => {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${!offers.length ? EMPTY_CLASS.MAIN : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        <div className="cities">
          <div className={`cities__places-container ${!offers.length ? EMPTY_CLASS.CITIES : ``} container`}>
            {offers.length ? <MainContainer/> : <NoOffers/>}
          </div>
        </div>
      </main>
    </div>
  );
};
const mapStateToProps = (state) => ({
  offers: getFilteredAndSortedOffers(state),
});

MainPage.propTypes = {
  offers: Type.OFFERS_LIST,
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
