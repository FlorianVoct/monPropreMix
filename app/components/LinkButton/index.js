
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ButtonStyle from './ButtonStyle';

function LinkButton(linkTo) {
  return (
    <div>
      <ButtonStyle to={linkTo}>
        <FormattedMessage {...messages.mixhomepage} />
      </ButtonStyle>
    </div>
  );
}

export default LinkButton;
