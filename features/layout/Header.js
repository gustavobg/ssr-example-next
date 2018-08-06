// import Link from 'next/link'
import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (<div>{props.children}</div>);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
