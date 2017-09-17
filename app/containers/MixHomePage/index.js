/*
*
* MixHomePage
*
*/

// on garde la structure React/Redux au cas où
// peut-être qu'un jour cette application fera des requêtes asynchrones...
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';

import SliderComponent from 'components/SliderComponent';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
    calculMixEnergetique,
    calculGes,
    enertxt,
    conso_initiale,
    transport_initiale,
    chauffage_initiale,
    industrie_initiale,
    electricite_initiale,
} from 'components/Calculation';

import Introduction from './PageComponents/Introduction';
import HomeMix from './PageComponents/HomeMix';
import SectorMix from './PageComponents/SectorMix';


export class MixHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    constructor(){
        super();
        this.state = {
            currentPage: 'Introduction',
            currentSector : 'electricite',
            conso: conso_initiale,
            electricite: {
                ptg : electricite_initiale.ptg_init,
                lock : electricite_initiale.lock_init
            },
            chauffage: {
                ptg : chauffage_initiale.ptg_init,
                lock : chauffage_initiale.lock_init
            },
            transport: {
                ptg : transport_initiale.ptg_init,
                lock : transport_initiale.lock_init
            },
            industrie: {
                ptg : industrie_initiale.ptg_init,
                lock : industrie_initiale.lock_init
            }
        }
    }

    changeConso(consoType, value){
        let consoTemp = Object.assign(this.state.conso);
        consoTemp[consoType] = value;
        this.setState({
            conso : consoTemp
        })
        this.forceUpdate();
    }

    changeSectorMixEnergie(sector, mixPtg){
        let stateObject = {
            sector : {
                ptg : mixPtg
            }
        }
        this.setState(stateObject);
        this.forceUpdate();
    }

    changeLockState(sector, lockByEnergy){
        let stateObject = {
            sector : {
                lock : lockByEnergy
            }
        }
        this.setState(stateObject);
        this.forceUpdate();
    }

    updateMixEnergie(){
        let energieTemp = calculMixEnergetique(
            this.state.conso,
            this.state.transport.ptg,
            this.state.chauffage.ptg,
            this.state.industrie.ptg,
            this.state.electricite.ptg,
        );
        return energieTemp;
    }

    buildEnergieGrapheList(){
        let energieGrapheList = [];
        let energieTemp = this.updateMixEnergie();
        energieTemp.forEach(function(element, index){
            energieGrapheList.push({
                name: enertxt[index],
                y: element
            })
        })
        return energieGrapheList;
    }

    buildCO2Emission(){
        let energieTemp = this.updateMixEnergie();
        return calculGes(energieTemp);
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
            return (
                <Introduction
                    selectPage= {this.changeCurrentPage.bind(this)}
                    />
            );
            case 'HomeMix':
            return (
                <HomeMix
                    selectPage= {this.changeCurrentPage.bind(this)}
                    selectSector= {this.changeCurrentSector.bind(this)}
                    energieGrapheList= {this.buildEnergieGrapheList()}
                    changeConso={this.changeConso.bind(this)}
                    conso= {this.state.conso}
                    ges= {this.buildCO2Emission.bind(this)}
                    />
            );
            case 'SectorMix':
            return (
                <SectorMix
                    selectPage = {this.changeCurrentPage.bind(this)}
                    sector = {this.state.currentSector}
                    sectorMixPtgAndLock = {this.state[this.state.currentSector]}
                    changeSectorMixEnergie = {this.changeSectorMixEnergie.bind(this)}
                    changeLockState = {this.changeLockState.bind(this)}
                    />
            );
            default:
            return (
                <Introduction
                    selectHomeMix= {this.changeCurrentPage.bind(this)}
                    />
            );
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

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MixHomePage);
