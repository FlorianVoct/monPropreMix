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
import { Link } from 'react-router';

import SliderComponent from 'components/SliderComponent';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
  calculMixEnergetique,
  conso_initiale,
  transport_initiale,
  chauffage_initiale,
  industrie_initiale,
  electricite_initiale,
  enertxt
} from 'components/Calculation';

import { modifieConso } from './actions';

import { PieChart, Pie } from 'recharts';

export class MixHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      energie: calculMixEnergetique(
        conso_initiale,
        transport_initiale.ptg_init,
        chauffage_initiale.ptg_init,
        industrie_initiale.ptg_init,
        electricite_initiale.ptg_init
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

  updateMixEnergie(){
    let energieTemp = calculMixEnergetique(
      this.props.conso,
      transport_initiale.ptg_init,
      chauffage_initiale.ptg_init,
      industrie_initiale.ptg_init,
      electricite_initiale.ptg_init
    );
    this.setState({
      energie : energieTemp
    })
  }

  buildEnergieGrapheList(){
    let energieGrapheList = [];
    this.state.energie.forEach(function(element, index){
      energieGrapheList.push({
        name: enertxt[index],
        y: element
      })
    })
    return energieGrapheList;
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
            <Link to={'/energiemixpage/electricite'}>Modifier le mix énergétique de l électricité</Link>
        <SliderComponent
            SliderTitle={"Consommation de chauffage des bâtiments"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'chauffage'}
            />
              <Link to={'/energiemixpage/chauffage'}>Modifier le mix énergétique du chauffage</Link>
        <SliderComponent
            SliderTitle={"Consommation dans les transports"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'transport'}
            />
            <Link to={'/energiemixpage/transport'}>Modifier le mix énergétique des transports</Link>
        <SliderComponent
            SliderTitle={"Consommation dans l'industrie et l'agriculture"}
            ModifieValue={this.dispatchModifiedConso.bind(this)}
            consoType={'industrie'}
            />
            <Link to={'/energiemixpage/industrie'}>Modifier le mix énergétique de l industrie et de l agriculture</Link>
        <PieGrapheComponent
         energieGrapheList= {this.buildEnergieGrapheList()}
         grapheTitle={'Mix énergétique - France Métropolitaine - 2050'}
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
