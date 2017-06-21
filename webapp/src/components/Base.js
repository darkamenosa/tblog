import React from 'react'
import PropTypes from 'prop-types'
import assign from 'object-assign'
import margins from './util/margins'
import padding from './util/padding'
import config from './config'

const Base = (props) => {
  const {
    tagName,
    baseStyle,
    style,
    m, mt, mr, mb, ml, mx, my,
    p, pt, pr, pb, pl, px, py,
    ...others
  } = props

  const { scale } = config

  const Component = props.Component || tagName || 'div'

  const sx = assign(
    { boxSizing: 'border-box' },
    baseStyle,
    margins({ m, mt, mr, mb, ml, mx, my }, scale),
    padding({ p, pt, pr, pb, pl, px, py }, scale),
    style,
  )

  return (
    <Component
      {...others}
      style={sx}
    />
  )
}

Base.propTypes = {
  tagName: PropTypes.string,
  Component: PropTypes.node,
  style: PropTypes.object,
  baseStyle: PropTypes.object,

  /* margin props */
  m:  PropTypes.oneOf([0, 1, 2, 3, 4]),
  mt: PropTypes.oneOf([0, 1, 2, 3, 4]),
  mr: PropTypes.oneOf([0, 1, 2, 3, 4]),
  mb: PropTypes.oneOf([0, 1, 2, 3, 4]),
  ml: PropTypes.oneOf([0, 1, 2, 3, 4]),
  mx: PropTypes.oneOf([0, 1, 2, 3, 4]),
  my: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /* padding props */
  p:  PropTypes.oneOf([0, 1, 2, 3, 4]),
  pt: PropTypes.oneOf([0, 1, 2, 3, 4]),
  pr: PropTypes.oneOf([0, 1, 2, 3, 4]),
  pb: PropTypes.oneOf([0, 1, 2, 3, 4]),
  pl: PropTypes.oneOf([0, 1, 2, 3, 4]),
  px: PropTypes.oneOf([0, 1, 2, 3, 4]),
  py: PropTypes.oneOf([0, 1, 2, 3, 4]),
}

export default Base
