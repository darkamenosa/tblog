/**
*
* Avatar
*
*/

import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  background-image: url(${(props) => props.url});
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

Avatar.defaultProps = {
  url: 'https://www.w3schools.com/howto/img_avatar.png',
  size: 36,
};

Avatar.propsType = {
  url: React.PropTypes.string,
  size: React.PropTypes.number,
};

export default Avatar;
