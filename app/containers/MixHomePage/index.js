/*
 *
 * MixHomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectMixHomePage, {makeSelectConso} from './selectors';
import messages from './messages';

import SliderComponent from 'components/SliderComponent';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
  calculMixEnergetique,
  conso_initiale,
  transport_initiale,
  Chauffage_initiale,
  industrie_initiale,
  electricite_initiale,
} from 'components/Calculation';

import { modifieConso } from './actions';

import { PieChart, Pie } from 'recharts';

export class MixHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      energie: calculMixEnergetique(
        conso_initiale,
        transport_initiale.ptg_init_transport,
        Chauffage_initiale.ptg_init_chauffage,
        industrie_initiale.ptg_init_industrie,
        electricite_initiale.ptg_init_electricite
      )
    };

  }

  // on initialize le store (pas réussi à le faire directement dans le
  // reducer)
  componentWillMount(){
    if(this.props.conso === ""){
       this.props.dispatch(modifieConso(conso_initiale));
    }
  }

  dispatchModifiedConso(consoType, value){
    let consoTemp = Object.assign(this.props.conso);
    consoTemp[consoType] = value;
    this.props.dispatch(modifieConso(consoTemp));
    this.updateMixEnergie();
  }

  updateMixEnergie(consoInitiale){
    let energieTemp = calculMixEnergetique(
      this.props.conso,
      transport_initiale.ptg_init_transport,
      Chauffage_initiale.ptg_init_chauffage,
      industrie_initiale.ptg_init_industrie,
      electricite_initiale.ptg_init_electricite
    );
    this.setState({
      energie : energieTemp
    })
  }

  render() {
    return (
      <div>
        <Helmet
          title="MixHomePage"
          meta={[
            { name: 'description', content: 'Description of MixHomePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <SliderComponent
            SliderTitle={"Consommation d'électricité spécifique (tertiaire et domestique)"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'elecspe'}
            />
        <SliderComponent
            SliderTitle={"Consommation de chauffage des bâtiments"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'chauffage'}
            />
        <SliderComponent
            SliderTitle={"Consommation dans les transports"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'transport'}
            />
        <SliderComponent
            SliderTitle={"Consommation dans l'industrie et l'agriculture"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'industrie'}
            />
        <PieGrapheComponent
         energie= {this.state.energie}
         />

      </div>
    );
  }
}

MixHomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  conso: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

const mapStateToProps = createStructuredSelector({
  MixHomePage: makeSelectMixHomePage(),
  conso: makeSelectConso(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MixHomePage);
