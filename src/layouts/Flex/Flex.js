import React from 'react';
import PropTypes from 'prop-types';
import { classNames, classNameObject } from '../../utils/format';
import flexModule from './Flex.module.css';

export default function Flex({
  children,
  className,
  position,
  background,
  backgroundImage,
  backgroundType,
  direction,
  flex,
  grow,
  width,
  height,
  overflowX,
  overflowY,
  align,
  justify,
  gutter,
  wrap,
  onClick,
}) {
  const classes = { ...classNameObject(className), [flexModule.Flex]: true };
  const styleAttrs = {};

  if (direction === 'vertical') {
    classes['sui-flex-vertical'] = true;

    if (align === 'top') {
      classes['sui-flex-start'] = true;
    } else if (align === 'middle') {
      classes['sui-flex-center'] = true;
    } else if (align === 'bottom') {
      classes['sui-flex-end'] = true;
    } else if (align === 'space-between') {
      classes['sui-flex-between'] = true;
    }

    if (justify === 'start') {
      classes['sui-flex-top'] = true;
    } else if (justify === 'center') {
      classes['sui-flex-middle'] = true;
    } else if (justify === 'end') {
      classes['sui-flex-bottom'] = true;
    }
  } else {
    if (align === 'top') {
      classes['sui-flex-top'] = true;
    } else if (align === 'middle') {
      classes['sui-flex-middle'] = true;
    } else if (align === 'bottom') {
      classes['sui-flex-bottom'] = true;
    }

    if (justify === 'start') {
      classes['sui-flex-start'] = true;
    } else if (justify === 'center') {
      classes['sui-flex-center'] = true;
    } else if (justify === 'end') {
      classes['sui-flex-end'] = true;
    } else if (justify === 'space-between') {
      classes['sui-flex-between'] = true;
    }
  }

  if (grow) { classes['sui-flex-grow'] = true; }
  if (!flex) { classes['sui-flex-hidden'] = true; }

  if (position) { classes[`sui-flex-pos-${position}`] = true; }

  if (height) {
    styleAttrs.height = `${height}px`;
    styleAttrs.minHeight = `${height}px`;
    styleAttrs.maxHeight = `${height}px`;
  }

  if (!!width && typeof width === 'string') {
    if (width === 'max') {
      classes['sui-flex-grow'] = true;
    } else if (['em', 'px', 'rem', '%'].some((unit) => width.includes(unit))) {
      styleAttrs.width = width;
      styleAttrs.minWidth = width;
      styleAttrs.maxWidth = width;
    } else {
      styleAttrs.width = `${width}rem`;
      styleAttrs.minWidth = `${width}rem`;
      styleAttrs.maxWidth = `${width}rem`;
    }
  }

  if (backgroundImage) {
    styleAttrs.backgroundImage = `url(${backgroundImage})`;
    styleAttrs.backgroundRepeat = 'no-repeat';
    styleAttrs.backgroundPositionX = 'center';
    styleAttrs.backgroundPositionY = 'center';
  }
  if (background) { styleAttrs.background = background; }
  if (backgroundType) { classes[`sui-flex-background-${backgroundType}`] = true; }

  if (wrap) { classes['sui-flex-wrap'] = true; }
  if (overflowX) { classes['sui-flex-overflow-x'] = true; }
  if (overflowY) { classes['sui-flex-overflow-y'] = true; }

  const [gutterX, gutterY] = gutter || [];
  if (gutterX) { classes[`sui-flex-gutter-x${gutterX}`] = true; }
  if (gutterY) { classes[`sui-flex-gutter-y${gutterY}`] = true; }

  const fns = {};
  if (typeof onClick === 'function') { fns.onClick = onClick; }

  return (
    <div className={classNames(classes)} style={styleAttrs} {...fns}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['relative']),
  background: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundType: PropTypes.oneOf(['contain', 'cover', 'stretch']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  flex: PropTypes.bool,
  grow: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.number,
  overflowX: PropTypes.bool,
  overflowY: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between']),
  gutter: PropTypes.arrayOf(PropTypes.oneOf([0, 2, 4, 8, 16, 24, 32, 40])),
  wrap: PropTypes.bool,
  onClick: PropTypes.func,
};

Flex.defaultProps = {
  className: null,
  position: null,
  background: null,
  backgroundImage: null,
  backgroundType: null,
  direction: 'horizontal',
  flex: true,
  grow: false,
  width: null,
  height: null,
  overflowX: false,
  overflowY: false,
  align: null,
  justify: null,
  gutter: [0, 0],
  wrap: false,
  onClick: () => {},
};
