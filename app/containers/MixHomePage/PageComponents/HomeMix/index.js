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

import { WrapperIntroduction, DivTitreMix, DivContent, Wrapper, GraphColumn, SliderColumn } from './../../style';
import {FaAutomobile, FaIndustry, FaHome, FaLightbulbO } from 'react-icons/lib/fa';
import { Button } from 'react-bootstrap';

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
        <Wrapper>
        <DivTitreMix>
            <h1>{'Mon propre Mix énergétique'}</h1>
            <h4>{'Simuler le mix énergétique français en 2050'}</h4>
        </DivTitreMix>
          <DivContent>
          <SliderColumn>
          <SliderComponent
              SliderTitle={"Consommation d'électricité spécifique (tertiaire et domestique)"}
              ModifieValue={this.props.changeConso}
              consoType={'elecspe'}
              constrainedValue={this.props.conso.elecspe}
              sectorLink={this.sectorMixPage.bind(this, 'electricite')}
              Icon={<FaLightbulbO size={25}/>}
              />
          <SliderComponent
              SliderTitle={"Consommation de chauffage des bâtiments"}
              ModifieValue={this.props.changeConso}
              consoType={'chauffage'}
              constrainedValue={this.props.conso.chauffage}
              sectorLink={this.sectorMixPage.bind(this, 'chauffage')}
              Icon={<FaHome size={25}/>}
              />
          <SliderComponent
              SliderTitle={"Consommation dans les transports"}
              ModifieValue={this.props.changeConso}
              consoType={'transport'}
              constrainedValue={this.props.conso.transport}
              sectorLink={this.sectorMixPage.bind(this, 'transport')}
              Icon={<FaAutomobile size={25}/>}
              />
          <SliderComponent
              SliderTitle={"Consommation dans l'industrie et l'agriculture"}
              ModifieValue={this.props.changeConso}
              consoType={'industrie'}
              constrainedValue={this.props.conso.industrie}
              sectorLink={this.sectorMixPage.bind(this, 'industrie')}
              Icon={<FaIndustry size={25}/>}
              />
               </SliderColumn>
                <GraphColumn>
          <PieGrapheComponent
           energieGrapheList= {this.props.energieGrapheList}
           grapheTitle={'Mix énergétique - France Métropolitaine - 2050'}
           />
           <BarCO2 ges={this.props.ges}/>
           <Button bsStyle="primary" onClick={this.changePage.bind(this)}>Revenir au début !</Button>
           </GraphColumn>

          </DivContent>
          </Wrapper>
      </WrapperIntroduction>
    );
  }
}

HomeMix.propTypes = {

};

export default HomeMix;
