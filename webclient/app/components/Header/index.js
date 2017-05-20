/**
*
* Header
*
*/

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import HambergerIcon from 'components/HambergerIcon';
import './styles.less';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Header() {
  return (
    <div>
      <div
        className={classNames('header')}
      >
        <HambergerIcon id="hamberger-menu" />
        <Link to="/">
          <div id="brand-logo"></div>
        </Link>
        <div id="notification-icon"></div>
      </div>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
