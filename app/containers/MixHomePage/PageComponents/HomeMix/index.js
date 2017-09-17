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

export class HomeMix extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
  }

  changeConso(consoType, value){
    this.props.changeConso(consoType, value);
  }

  changePage(){
    console.log('go to homemix');
    this.props.selectPage('Introduction');
  }

  sectorMixPage(sector){
    this.props.selectPage('SectorMix');
    this.props.selectSector(sector);
  }

  render() {
    return (
      <div>
      <SliderComponent
          SliderTitle={"Consommation d'électricité spécifique (tertiaire et domestique)"}
          ModifieValue={this.props.changeConso}
          consoType={'elecspe'}
          constrainedValue={this.props.conso.elecspe}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'electricite')}
          > Modifier le mix énergétique de l électricité
          </div>
      <SliderComponent
          SliderTitle={"Consommation de chauffage des bâtiments"}
          ModifieValue={this.props.changeConso}
          consoType={'chauffage'}
          constrainedValue={this.props.conso.chauffage}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'chauffage')}
          > Modifier le mix énergétique du chauffage
          </div>
      <SliderComponent
          SliderTitle={"Consommation dans les transports"}
          ModifieValue={this.props.changeConso}
          consoType={'transport'}
          constrainedValue={this.props.conso.transport}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'transport')}
          > Modifier le mix énergétique des transports
          </div>
      <SliderComponent
          SliderTitle={"Consommation dans l'industrie et l'agriculture"}
          ModifieValue={this.props.changeConso}
          consoType={'industrie'}
          constrainedValue={this.props.conso.industrie}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'industrie')}
          > Modifier le mix énergétique de l industrie et de l agriculture
          </div>

      <PieGrapheComponent
       energieGrapheList= {this.props.energieGrapheList}
       grapheTitle={'Mix énergétique - France Métropolitaine - 2050'}
       />

       <BarCO2 />

        <div
         onClick={this.changePage.bind(this)}
        > Revenir au début !
        </div>

      </div>
    );
  }
}

HomeMix.propTypes = {

};

export default HomeMix;
