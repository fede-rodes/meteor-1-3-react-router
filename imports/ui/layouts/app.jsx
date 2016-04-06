import React, { PropTypes } from 'react';
import { Navigation } from '../components/navigation.jsx';

export const App = ({ children }) => (
  <div>
    <Navigation />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};
