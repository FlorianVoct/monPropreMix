/*
 *
 * Introduction
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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

import { modifieConso } from 'containers/MixHomePage/actions';
import { modifieMixEnergieAction } from 'containers/EnergieMixPage/actions';

export class Introduction extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
  }

  componentWillMount(){
    this.props.dispatch(modifieConso(conso_initiale));
    this.props.dispatch(modifieMixEnergieAction('electricite', electricite_initiale.ptg_init));
    this.props.dispatch(modifieMixEnergieAction('chauffage', chauffage_initiale.ptg_init));
    this.props.dispatch(modifieMixEnergieAction('transport', transport_initiale.ptg_init));
    this.props.dispatch(modifieMixEnergieAction('industrie', industrie_initiale.ptg_init));
  }

  render() {
    return (
      <div>
        <Header />
        <FormattedMessage {...messages.notice} />
        {LinkButton('/mixhomepage')}
        <Footer />
      </div>
    );
  }
}

Introduction.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Introduction);
