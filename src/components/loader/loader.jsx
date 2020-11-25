import React from 'react';

const containerStyle = {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  width: `100%`,
  margin: `20px`,
  padding: `30px`,
  fontSize: `38px`,
  lineHeight: 0.7,
  fontWeight: 700,
  fontStyle: `oblique`,
  textAlign: `center`,
};

const imageStyle = {
  marginRight: `20px`,
};

const textStyle = {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
};

const Loader = () => {
  return (
    <div style={containerStyle}>
      <h3 style={textStyle}>
        <img src="/img/logo.svg" alt="logo" width="100" height="50" style={imageStyle}></img>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
          <path id="path">
            <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="3s" begin="0s" repeatCount="indefinite" />
          </path>
          <text fill='black'>
            <textPath xlinkHref="#path">Loading...</textPath>
          </text>
        </svg>
      </h3>
    </div>
  );
};


export default Loader;
