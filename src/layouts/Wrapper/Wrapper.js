import React from 'react';
import PropTypes from 'prop-types';

export default function Wrapper({
  className, width, padding, children,
}) {
  return (
    <div className={className} style={{ padding, maxWidth: width, margin: '0 auto' }}>{children}</div>
  );
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  width: PropTypes.string,
};
Wrapper.defaultProps = {
  variant: 'default',
  padding: '10px',
  width: '1152px',
};
