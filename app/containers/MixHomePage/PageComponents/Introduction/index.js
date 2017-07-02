/*
 *
 * Introduction
 *
 */

import React, { PropTypes } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import LinkButton from 'components/LinkButton';

import {
  conso_initiale,
  transport_initiale,
  chauffage_initiale,
  industrie_initiale,
  electricite_initiale
} from 'components/Calculation';

// import { modifieConso } from 'containers/MixHomePage/actions';
// import { modifieMixEnergieAction } from 'containers/EnergieMixPage/actions';

export class Introduction extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
  }

  changePage(){
    this.props.selectPage('HomeMix');
  }

  render() {
    return (
      <div>
        <Header />
        <FormattedMessage {...messages.notice} />
           <div
            onClick={this.changePage.bind(this)}
           > Commencer !
           </div>
        <Footer />
      </div>
    );
  }
}

Introduction.propTypes = {
  selectPage: PropTypes.func,
};

export default Introduction;
