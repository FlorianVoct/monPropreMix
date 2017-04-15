/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router'
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Link to="/">
        <FormattedMessage {...messages.home} />
      </Link>
      <Link to="/features">
        <FormattedMessage {...messages.features} />
      </Link>
      <Link to="/introduction">
        <FormattedMessage {...messages.introduction} />
      </Link>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
