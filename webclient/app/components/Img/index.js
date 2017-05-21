/**
*
* Img
*
*/

import React from 'react';
// import styled from 'styled-components';


function Img(props) {
  return (
    <img src={props.src} alt={props.alt} {...props} />
  );
}

Img.propTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
};

export default Img;
