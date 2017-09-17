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

import { Wrapper, Titre, SousTitre } from './style';

function Header() {
  return (
    <Wrapper>
      <Titre>
        <FormattedMessage {...messages.titre} />
      </Titre>
      <SousTitre>
        <FormattedMessage {...messages.soustitre} />
      </SousTitre>
    </Wrapper>
  );
}

Header.propTypes = {

};

export default Header;
