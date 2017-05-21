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
  padding-top: 15px;
`;

function AppWrapper(props) {
  return (
    <div className="row">
      <Helmet
        title={props.title}
        meta={props.meta}
      />
      <Header />
      <ContentContainer className="container">
        {React.Children.toArray(props.children)}
      </ContentContainer>
    </div>
  );
}

AppWrapper.defaultProps = {
  title: 'tblog',
  meta: [],
};

AppWrapper.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  meta: React.PropTypes.array,
};

export default AppWrapper;
