import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardOffer from '../card-offer/card-offer';

class CardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.handleCardsListHover = this.handleCardsListHover.bind(this);
  }

  handleCardsListHover(key) {
    this.setState({
      activeCard: key
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return <CardOffer
            key={offer.id}
            offer={offer}
            onHover={this.handleCardsListHover}
          />;
        })}
      </div>
    );
  }
}

CardsList.propTypes = {
  offers: PropTypes.array,
};

export default CardsList;
