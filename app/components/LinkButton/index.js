
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ButtonStyle from './ButtonStyle';


function LinkButton() {
  return (
    <div>
      <ButtonStyle to="/mixhomepage">
        <FormattedMessage {...messages.mixhomepage} />
      </ButtonStyle>
    </div>
  );
}

LinkButton.propTypes = {

};

export default LinkButton;
