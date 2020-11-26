import React from 'react';
import * as Type from '../../prop-types';

const OfferMark = ({typeClass}) =>{
  return (
    <div className={`${typeClass}__mark`}>
      <span>Premium</span>
    </div>
  );
};

OfferMark.propTypes = {
  typeClass: Type.TYPE_NAME.isRequired,
};

export default OfferMark;
