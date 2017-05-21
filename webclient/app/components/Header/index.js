/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import LoadingBar from 'react-redux-loading-bar';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


const Wrapper = styled.div`
`;

const Head = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  position: relative;
  z-index: 2;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
  padding-left: 2em;
  padding-right: 2em;
  justify-content: space-between;
  align-items: center;
`;

const LeftMenu = styled.div`

`;

const RightMenu = styled.div`
`;

const StyledLink = styled(Link)`
  margin-left: 1em;
  margin-right: 1em;
`;

const Header = () => (
  <Wrapper>
    <Head>
      <LeftMenu>
        <h2>tblog</h2>
      </LeftMenu>
      <RightMenu>
        <StyledLink>Sign Up</StyledLink>
        <StyledLink>Sign In</StyledLink>
      </RightMenu>
    </Head>
    <LoadingBar />
  </Wrapper>
);

Header.propTypes = {

};

export default Header;
