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
  enertxt,
  conso_initiale,
  transport_initiale,
  chauffage_initiale,
  industrie_initiale,
  electricite_initiale,
} from 'components/Calculation';

import { modifieConso, modifieMixEnergieAction } from './actions';
// import { makeSelectEnergieMix } from 'containers/EnergieMixPage/selectors';

import Introduction from './PageComponents/Introduction';
import HomeMix from './PageComponents/HomeMix';
import SectorMix from './PageComponents/SectorMix';


export class MixHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      currentPage: 'Introduction',
      energie: []
    }
  }

  componentWillMount(){
    console.log('on est ici')
    console.log("on est dans comp will mount", conso_initiale);
    console.log(electricite_initiale.ptg_init);
    console.log(chauffage_initiale.ptg_init);
    console.log(transport_initiale.ptg_init);
    console.log(industrie_initiale.ptg_init);



    this.props.dispatch(modifieConso(conso_initiale));
    this.props.dispatch(modifieMixEnergieAction('electricite', electricite_initiale.ptg_init));
    this.props.dispatch(modifieMixEnergieAction('chauffage', chauffage_initiale.ptg_init));
    this.props.dispatch(modifieMixEnergieAction('transport', transport_initiale.ptg_init));
    this.props.dispatch(modifieMixEnergieAction('industrie', industrie_initiale.ptg_init));
    this.updateMixEnergie();
  }

  // // on initialize le store (pas réussi à le faire directement dans le
  // // reducer)
  // componentWillMount(){
  //   this.updateMixEnergie();
  //
  // }

  dispatchModifiedConso(consoType, value){
    let consoTemp = Object.assign(this.props.conso);
    consoTemp[consoType] = value;
    this.props.dispatch(modifieConso(consoTemp));
    this.updateMixEnergie();
  }

  updateMixEnergie(){
    console.log('conso ', this.props.conso);
    console.log('conso ', this.props.conso);
    // console.log(this.props.conso);
    // console.log(this.props.conso);
    // let energieTemp = calculMixEnergetique(
    //   this.props.conso,
    //   ,
    //   ,
    //   ,
    //
    // );

    this.setState({
      energie : [2, 3],
      energieGrapheList: this.buildEnergieGrapheList()
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

  changeCurrentPage(currentPage){
    this.setState({
      currentPage: currentPage
    })
  }

  changeCurrentSector(currentSector){
    this.setState({
      currentSector: currentSector
    })
  }

  selectPage(page){
    switch (this.state.currentPage){
      case 'Introduction':
        return (<Introduction
          selectPage= {this.changeCurrentPage.bind(this)}
          />);
      case 'HomeMix':
        return (<HomeMix
          selectPage= {this.changeCurrentPage.bind(this)}
          selectSector= {this.changeCurrentSector.bind(this)}
          energieGrapheList= {this.state.energieGrapheList}
          dispatchModifiedConso={this.dispatchModifiedConso.bind(this)}
          />);
      case 'SectorMix':
        return (<SectorMix
          selectPage = {this.changeCurrentPage.bind(this)}
          sector = {this.state.sector}
          />);
      default:
      return (<Introduction
        selectHomeMix= {this.changeCurrentPage.bind(this)}
        />);
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
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
  Store: makeSelectMixHomePage(),
  conso: makeSelectConso(),
  // energieMixPtg: makeSelectEnergieMix(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MixHomePage);
