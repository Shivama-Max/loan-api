import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '/imports/ui/App';
import '/imports/startup/accounts-config.js'; // If you have any accounts configuration

Meteor.startup(() => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('react-target')
  );
});

