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

import { WrapperIntroduction, Wrapper, DivTitreMix, DivContent, SliderColumn, GraphColumn } from './../../style';
import { Button } from 'react-bootstrap';

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
    let mixEnergieTemp = Object.assign(this.props.sectorMixPtgAndLock.ptg);
    mixEnergieTemp[energieIndex] = value;
    let newMixEnergie = calculEnergieMixSecteur(mixEnergieTemp, this.props.sectorMixPtgAndLock.lock);
    this.props.changeSectorMixEnergie(this.props.sector, newMixEnergie);
  }

  changeLockState(energieIndex, lockState){
    let lockByEnergy = Object.assign(this.props.sectorMixPtgAndLock.lock);
    lockByEnergy[energieIndex] = lockState;
    this.props.changeLockState(this.props.sector, lockByEnergy)
  }

  buildSliderList(){
    let ArrayOfSliderComponent = [];
    let EnergieMixPage = this;
    let value = this.props.sectorMixPtgAndLock.ptg;
    let lockState = this.props.sectorMixPtgAndLock.lock;
    this.mixEnergieInfo[this.props.sector].enertxt.forEach(function(element, index){
      ArrayOfSliderComponent.push(<SliderMixEnergie
        key={index}
        energieName={element}
        ModifieValue={EnergieMixPage.changeSectorMixEnergie.bind(EnergieMixPage)}
        energieIndex={index}
        constrainedValue={value[index]}
        lockState={lockState[index]}
        changeLockState={EnergieMixPage.changeLockState.bind(EnergieMixPage)}
        />)
    })
    return ArrayOfSliderComponent;
  }

  buildEnergieGrapheList(){
    let enertxt = this.mixEnergieInfo[this.props.sector].enertxt;
    let color = this.mixEnergieInfo[this.props.sector].color;
    let energieGrapheList = [];
    let energieMix = Object.assign(this.props.sectorMixPtgAndLock.ptg);
    energieMix.forEach(function(element, index){
      energieGrapheList.push({
        name: enertxt[index],
        y: element,
        color: color[index]
      })
    })
    return energieGrapheList;
  }

  changePage(){
    this.props.selectPage('HomeMix');
  }

  render() {
    return (
        <WrapperIntroduction>
      <Wrapper>
      <DivTitreMix>
          <h1>{'Mon propre Mix énergétique'}</h1>
          <h4>{'Simuler le mix énergétique français en 2050'}</h4>
      </DivTitreMix>
        <DivContent>
         <SliderColumn>
      {this.buildSliderList()}
       </SliderColumn>
       <GraphColumn>
      <PieGrapheComponent
      energieGrapheList= {this.buildEnergieGrapheList()}
      grapheTitle={'Mix énergétique - ' + this.props.sector}
      />
      <Button bsStyle="primary" onClick={this.changePage.bind(this)}>Retour a la page principale</Button>
      </GraphColumn>
       </DivContent>
      </Wrapper>
      </WrapperIntroduction>
    );
  }
}

SectorMix.propTypes = {
  sectorMixPtgAndLock: PropTypes.object,
  changeLockState: PropTypes.func,
};

export default SectorMix;
