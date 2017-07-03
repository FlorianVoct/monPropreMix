/*
 *
 * HomeMix
 *
 */

import React, { PropTypes } from 'react';

import SliderComponent from 'components/SliderComponent';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
  calculMixEnergetique,
  enertxt
} from 'components/Calculation';

// import { modifieConso } from './actions';
// import { makeSelectEnergieMix } from 'containers/EnergieMixPage/selectors';


export class HomeMix extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
  }

  // componentWillMount(){
  //   this.props.dispatch(modifieConso(conso_initiale));
  //   this.props.dispatch(modifieMixEnergieAction('electricite', electricite_initiale.ptg_init));
  //   this.props.dispatch(modifieMixEnergieAction('chauffage', chauffage_initiale.ptg_init));
  //   this.props.dispatch(modifieMixEnergieAction('transport', transport_initiale.ptg_init));
  //   this.props.dispatch(modifieMixEnergieAction('industrie', industrie_initiale.ptg_init));
  // }
  //
  // // on initialize le store (pas réussi à le faire directement dans le
  // // reducer)
  // componentWillMount(){
  //   this.updateMixEnergie();
  //
  // }
  //
  // dispatchModifiedConso(consoType, value){
  //   let consoTemp = Object.assign(this.props.conso);
  //   consoTemp[consoType] = value;
  //   this.props.dispatch(modifieConso(consoTemp));
  //   this.updateMixEnergie();
  // }
  //
  // updateMixEnergie(){
  //   console.log('conso ', this.props.conso);
  //   console.log('conso ', this.props.conso);
  //   // console.log(this.props.conso);
  //   // console.log(this.props.conso);
  //   // let energieTemp = calculMixEnergetique(
  //   //   this.props.conso,
  //   //   ,
  //   //   ,
  //   //   ,
  //   //
  //   // );
  //   this.setState({
  //     energie : []
  //   })
  // }
  //
  // buildEnergieGrapheList(){
  //   let energieGrapheList = [];
  //   this.state.energie.forEach(function(element, index){
  //     energieGrapheList.push({
  //       name: enertxt[index],
  //       y: element
  //     })
  //   })
  //   return energieGrapheList;
  // }

  changePage(){
    console.log('go to homemix');
    this.props.selectPage('Introduction');
  }

  sectorMixPage(sector){
    this.props.selectPage('SectorMix');
    this.props.selectSector(sector);
  }

  render() {
    console.log(this.props.energieGrapheList);
    return (
      <div>
      <SliderComponent
          SliderTitle={"Consommation d'électricité spécifique (tertiaire et domestique)"}
          ModifieValue={this.props.dispatchModifiedConso}
          consoType={'elecspe'}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'electricite')}
          > Modifier le mix énergétique de l électricité
          </div>
      <SliderComponent
          SliderTitle={"Consommation de chauffage des bâtiments"}
          ModifieValue={this.props.dispatchModifiedConso}
          consoType={'chauffage'}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'chauffage')}
          > Modifier le mix énergétique du chauffage
          </div>
      <SliderComponent
          SliderTitle={"Consommation dans les transports"}
          ModifieValue={this.props.dispatchModifiedConso}
          consoType={'transport'}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'transport')}
          > Modifier le mix énergétique des transports
          </div>
      <SliderComponent
          SliderTitle={"Consommation dans l'industrie et l'agriculture"}
          ModifieValue={this.props.dispatchModifiedConso}
          consoType={'industrie'}
          />
          <div
           onClick={this.sectorMixPage.bind(this, 'industrie')}
          > Modifier le mix énergétique de l industrie et de l agriculture
          </div>


      <PieGrapheComponent
       energieGrapheList= {this.props.energieGrapheList}
       grapheTitle={'Mix énergétique - France Métropolitaine - 2050'}
       />




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
