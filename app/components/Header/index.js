/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Header.propTypes = {

};

export default Header;
