/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import LoadingBar from 'react-redux-loading-bar';
import styled from 'styled-components';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Logo = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 1;
`;

const NavHeader = styled(Navbar.Header)`
  margin-left: 0px!important;
  margin-right: 0px!important;
`;

const NavBrand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
`;

const RightNav = styled(Nav)`
  margin-left: 0px!important;
  margin-right: 0px!important;
`;

const HambergerToggle = styled(Navbar.Toggle)`
  border: none;
`;

const Header = (props) => (
  <Navbar style={props.style}>
    <LoadingBar />
    <NavHeader>
      <NavBrand>
        <Link to="/">
          <Logo>
            tblog
          </Logo>
        </Link>
      </NavBrand>
      <HambergerToggle />
    </NavHeader>
    <Navbar.Collapse>
      <RightNav pullRight>
        <NavItem eventKey={1} href="/#/search">
          <i className="fa fa-search fa-lg" />
        </NavItem>
        <NavItem eventKey={1} href="/#/register">
          Sign Up
        </NavItem>
        <NavItem eventKey={2} href="/#/login">
          Sign In
        </NavItem>
      </RightNav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  style: React.PropTypes.object,
};

export default Header;
