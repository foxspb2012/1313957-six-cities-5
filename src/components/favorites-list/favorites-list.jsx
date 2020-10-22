import React from "react";
import PropTypes from 'prop-types';
import CardFavorite from '../cards/card-favorite/card-favorite';

const FavoritesList = (props) => {
  const {offers} = props;
  return (
    <React.Fragment>
      {offers.map((offer) => (
        <CardFavorite
          offer={offer}
          key={offer.id}/>
      ))}
    </React.Fragment>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesList;
