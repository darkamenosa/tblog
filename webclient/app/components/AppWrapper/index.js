/**
*
* AppWrapper
*
*/

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../Header';


const ContentContainer = styled.div`

`;

function AppWrapper(props) {
  const { whiteHeader, noUnderline } = props;

  const white = whiteHeader ? { backgroundColor: '#fff' } : {};
  const noUL = noUnderline ? { border: 'none' } : {};

  return (
    <div className="row">
      <Helmet
        title={props.title}
        meta={props.meta}
      />
      <Header style={{ ...white, ...noUL }} />
      <ContentContainer className="container">
        {React.Children.toArray(props.children)}
      </ContentContainer>
    </div>
  );
}

AppWrapper.defaultProps = {
  title: 'tblog',
  meta: [],
  whiteHeader: false,
  noUnderline: false,
};

AppWrapper.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  meta: React.PropTypes.array,
  whiteHeader: React.PropTypes.bool,
  noUnderline: React.PropTypes.bool,
};

export default AppWrapper;
