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

const Blue = styled.span`
  color: #337ab7
`;

const Header = () => (
  <Navbar>
    <LoadingBar />
    <NavHeader>
      <NavBrand>
        <Link to="/">
          <Logo>
            <Blue>tblog</Blue>
          </Logo>
        </Link>
      </NavBrand>
      <HambergerToggle />
    </NavHeader>
    <Navbar.Collapse>
      <RightNav pullRight>
        <NavItem eventKey={1} href="/#/search">
          <Blue><i className="fa fa-search fa-lg" /></Blue>
        </NavItem>
        <NavItem eventKey={1} href="/#/register">
          <Blue>Sign Up</Blue>
        </NavItem>
        <NavItem eventKey={2} href="/#/login">
          <Blue>Sign In</Blue>
        </NavItem>
      </RightNav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {

};

export default Header;
