/*
 *
 * SectorMix
 *
 */

import React, { PropTypes } from 'react';

import SliderMixEnergie from 'components/SliderMixEnergie';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
  calculEnergieMixSecteur,
  transport_initiale,
  chauffage_initiale,
  industrie_initiale,
  electricite_initiale,
} from 'components/Calculation';

export class SectorMix extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
  }

  componentWillMount(){
    this.mixEnergieInfo = {
        electricite : electricite_initiale,
        chauffage : chauffage_initiale,
        transport : transport_initiale,
        industrie : industrie_initiale,
      }
  }

  changeSectorMixEnergie(energieIndex, value){
    let mixEnergieTemp = Object.assign(this.props.sectorMixPtg);
    mixEnergieTemp[energieIndex] = value;
    let newMixEnergie = calculEnergieMixSecteur(mixEnergieTemp);
    this.props.changeSectorMixEnergie(this.props.sector, newMixEnergie);
  }

  buildSliderList(){
    let ArrayOfSliderComponent = [];
    let EnergieMixPage = this;
    let value = this.props.sectorMixPtg;
    this.mixEnergieInfo[this.props.sector].enertxt.forEach(function(element, index){
      ArrayOfSliderComponent.push(<SliderMixEnergie
        key={index}
        energieName={element}
        ModifieValue={EnergieMixPage.changeSectorMixEnergie.bind(EnergieMixPage)}
        energieIndex={index}
        constrainedValue={value[index]}
        />)
    })
    return ArrayOfSliderComponent;
  }

  buildEnergieGrapheList(){
    let enertxt = this.mixEnergieInfo[this.props.sector].enertxt;
    let energieGrapheList = [];
    let energieMix = Object.assign(this.props.sectorMixPtg);
    energieMix.forEach(function(element, index){
      energieGrapheList.push({
        name: enertxt[index],
        y: element
      })
    })
    return energieGrapheList;
  }

  changePage(){
    this.props.selectPage('HomeMix');
  }

  render() {
    return (
      <div>
      {this.buildSliderList()}
      <PieGrapheComponent
      energieGrapheList= {this.buildEnergieGrapheList()}
      grapheTitle={'Mix énergétique - ' + this.props.sector}
      />
        <div
         onClick={this.changePage.bind(this)}
        >
        Retour a la page principale
        </div>
      </div>
    );
  }
}

SectorMix.propTypes = {
};

export default SectorMix;
