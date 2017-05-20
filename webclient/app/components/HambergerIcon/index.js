/**
*
* HambergerIcon
*
*/

import React from 'react';
import classNames from 'classnames';
import './styles.less';


function HambergerIcon(props) {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      className={classNames('nav-icon', {
        open: props.open,
        back: props.back,
      })}
    >
      <div className="nav-icon-bars">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

HambergerIcon.propTypes = {
  id: React.PropTypes.string,
  onClick: React.PropTypes.func,
  open: React.PropTypes.bool,
  back: React.PropTypes.bool,
};

export default HambergerIcon;
