import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card-offer/card-offer';

const CardsList = (props) => {

  const {offers} = props;

  return (
    offers.map((offer) => {
      return <Card
        offer={offer}
        key={offer.id}
      />;
    })
  );
};


CardsList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default CardsList;
