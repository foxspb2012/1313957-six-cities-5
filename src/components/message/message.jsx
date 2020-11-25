import React from 'react';
import * as Type from '../../prop-types';

const containerStyle = {
  display: `flex`,
  alignItems: `center`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  width: `100%`,
  margin: `20px`,
  padding: `20px`,
  textAlign: `center`,
  color: `#ff0000`,
};

const Message = (props) => {
  const {text} = props;
  return (
    <div style={containerStyle}>
      <p>{text}</p>
    </div>
  );
};

Message.propTypes = {
  text: Type.MESSAGE_TEXT,
};

export default Message;
