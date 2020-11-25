import React from 'react';

const NoFavorites = () => {
  return (
    <div className="favorites__status-wrapper">
      <b className="favorites__status">Nothing yet saved.</b>
      <p className="favorites__status-description">
        Save properties to narrow down search or plan yor future trips.
      </p>
    </div>
  );
};

export default NoFavorites;
