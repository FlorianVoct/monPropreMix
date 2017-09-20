/*
 *
 * HomeMix
 *
 */

import React, { PropTypes } from 'react';

import SliderComponent from 'components/SliderComponent';
import PieGrapheComponent from 'components/PieGrapheComponent';
import BarCO2 from 'components/BarCO2';
import {
  calculMixEnergetique,
  enertxt
} from 'components/Calculation';

import { WrapperIntroduction, DivTitreMix, DivContent } from './../../style';

export class HomeMix extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  changeConso(consoType, value){
    this.props.changeConso(consoType, value);
  }

  changePage(){
    this.props.selectPage('Introduction');
  }

  sectorMixPage(sector){
    this.props.selectPage('SectorMix');
    this.props.selectSector(sector);
  }

  render() {
    return (
        <WrapperIntroduction>
        <DivTitreMix>
            <h1>{'Mon propre Mix énergétique'}</h1>
            <h4>{'Simuler le mix énergétique français en 2050'}</h4>
        </DivTitreMix>
          <DivContent>
          <SliderComponent
              SliderTitle={"Consommation d'électricité spécifique (tertiaire et domestique)"}
              ModifieValue={this.props.changeConso}
              consoType={'elecspe'}
              constrainedValue={this.props.conso.elecspe}
              sectorLink={this.sectorMixPage.bind(this, 'electricite')}
              />
          <SliderComponent
              SliderTitle={"Consommation de chauffage des bâtiments"}
              ModifieValue={this.props.changeConso}
              consoType={'chauffage'}
              constrainedValue={this.props.conso.chauffage}
              sectorLink={this.sectorMixPage.bind(this, 'chauffage')}
              />
          <SliderComponent
              SliderTitle={"Consommation dans les transports"}
              ModifieValue={this.props.changeConso}
              consoType={'transport'}
              constrainedValue={this.props.conso.transport}
              sectorLink={this.sectorMixPage.bind(this, 'transport')}
              />
          <SliderComponent
              SliderTitle={"Consommation dans l'industrie et l'agriculture"}
              ModifieValue={this.props.changeConso}
              consoType={'industrie'}
              constrainedValue={this.props.conso.industrie}
              sectorLink={this.sectorMixPage.bind(this, 'industrie')}
              />
          <PieGrapheComponent
           energieGrapheList= {this.props.energieGrapheList}
           grapheTitle={'Mix énergétique - France Métropolitaine - 2050'}
           />

           <BarCO2 ges={this.props.ges}/>

            <button
             onClick={this.changePage.bind(this)}
            > Revenir au début !
            </button>

          </DivContent>
      </WrapperIntroduction>
    );
  }
}

HomeMix.propTypes = {

};

export default HomeMix;
