/*
 *
 * EnergieMixPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectEnergieMixPage from './selectors';
import messages from './messages';
import { Link } from 'react-router';

import SliderMixEnergie from 'components/SliderMixEnergie';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
  calculEnergieMixSecteur,
  transport_initiale,
  chauffage_initiale,
  industrie_initiale,
  electricite_initiale,
} from 'components/Calculation';

import { modifieMixEnergieAction } from './actions';
import { makeSelectEnergieMix } from './selectors';


export class EnergieMixPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state = {
      energie: [],
    };
    this.mixEnergieInfo = {};
    this.secteur = "";
  }

  componentWillMount(){
    this.mixEnergieInfo = {
        electricite : electricite_initiale,
        chauffage : chauffage_initiale,
        transport : transport_initiale,
        industrie : industrie_initiale,
      }
    this.secteur = this.props.params.consommation;
    this.setState({
      energie : this.props.energieMixPtg[this.secteur]
    })
}

  dispatchModifiedMixEnergie(energieIndex, value){
    let mixEnergieTemp = Object.assign(this.props.energieMixPtg[this.secteur]);
    mixEnergieTemp[energieIndex] = value;
    let newMixEnergie = calculEnergieMixSecteur(mixEnergieTemp);
    this.setState({
      energie : newMixEnergie
    })
    this.props.dispatch(modifieMixEnergieAction(this.secteur, newMixEnergie));
  }

  buildSliderList(){
    let ArrayOfSliderComponent = [];
    let EnergieMixPage = this;
    let value = this.props.energieMixPtg[this.secteur]
    this.mixEnergieInfo[this.secteur].enertxt.forEach(function(element, index){
      ArrayOfSliderComponent.push(<SliderMixEnergie
        key={index}
        energieName={element}
        ModifieValue={EnergieMixPage.dispatchModifiedMixEnergie.bind(EnergieMixPage)}
        energieIndex={index}
        constrainedValue={value[index]}
        />)
    })
    return ArrayOfSliderComponent;
  }

  buildEnergieGrapheList(){
    console.log('energie state dans build graphe', this.state.energie);

    let enertxt = this.mixEnergieInfo[this.secteur].enertxt;
    let energieGrapheList = [];
    let energieMix = Object.assign(this.state.energie);
    console.log('energieMix', energieMix);
    energieMix.forEach(function(element, index){
      console.log(element);
      console.log(index);
      energieGrapheList.push({
        name: enertxt[index],
        y: element
      })
    })
    console.log('le tableau du graphe', energieGrapheList);
    return energieGrapheList;
  }

  render() {
    let energieGrapheList = this.buildEnergieGrapheList();
    let grapheTitle = 'Mix énergétique - ' + this.secteur;
    return (
      <div>
        <Helmet
          title="EnergieMixPage"
          meta={[
            { name: 'description', content: 'Description of EnergieMixPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        {this.buildSliderList()}
        <PieGrapheComponent
        energieGrapheList= {energieGrapheList}
        grapheTitle={grapheTitle}
        />
        <Link to={'/mixhomepage'}>Retour à la page principale</Link>
      </div>
    );
  }
}

EnergieMixPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  energieMixPtg: makeSelectEnergieMix(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnergieMixPage);
