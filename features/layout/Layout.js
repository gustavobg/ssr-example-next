import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
