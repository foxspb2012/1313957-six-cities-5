import React from 'react';
import PropTypes from 'prop-types';

const PhotosList = (props) => {
  const {photos} = props;
  return (
    photos.map((photo, i) =>
      <div className="property__image-wrapper" key={photo + i}>
        <img className="property__image" src={photo} alt="Photo studio"/>
      </div>
    )
  );
};

PhotosList.propTypes = {
  photos: PropTypes.array
};

export default PhotosList;
