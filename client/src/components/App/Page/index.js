import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

const Page = ({ children }) => (
  <main id="main">
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Page;