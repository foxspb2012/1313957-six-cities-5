import React from 'react';
import Loader from '../components/loader/loader';

export const withLoad = (Component) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props}/> : <Loader />;
};
