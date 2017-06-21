import React from 'react'
import Base from './Base'
import config from './config'

const Button = ({
  href,
  big,
  baseStyle,
  _className,
  ...props
}) => {
  const Component = href ? 'a' : 'button'

  const { fontSizes, bold, scale } = config

  const minHeight = scale[3]

  const sx = {
    ...baseStyle,
    minHeight,
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: `${scale[2]}px`,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: big ? scale[2] : scale[1],
    paddingBottom: big ? scale[2] : scale[1],
    paddingLeft: scale[2],
    paddingRight: scale[2],
    cursor: 'pointer',
    border: 0,
  }

  return (
    <Base
      {...props}
      tagName={Component}
      className={_className || 'Button'}
      href={href}
      baseStyle={sx}
    />
  )
}

export default Button
