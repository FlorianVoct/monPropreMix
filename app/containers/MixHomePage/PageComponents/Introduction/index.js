/*
*
* Introduction
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
    conso_initiale,
    transport_initiale,
    chauffage_initiale,
    industrie_initiale,
    electricite_initiale
} from 'components/Calculation';

import { WrapperIntroduction, DivTitre, DivTexte } from './../../style';
import { Button } from 'react-bootstrap';

export class Introduction extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    changePage(){
        this.props.selectPage('HomeMix');
    }

    render() {
        return (
            <WrapperIntroduction>
                <DivTitre>
                    <h1>{'Mon propre Mix énergétique'}</h1>
                    <h4>{'Simuler le mix énergétique français en 2050'}</h4>
                </DivTitre>
                <DivTexte>
                    <h4>{"Comment fonctionne ce simulateur : "}</h4>
                    <p>{"L'objectif est de diviser par 4 les émissions de gaz à effet de serre (GES) liées à l'énergie"
                    + "en France (par rapport à 1990). Les émissions de CO2 par an et par habitant sont indiquées en bas de la page. "
                    + "Lorsque votre objectif sera atteint, ce taux apparaitra en vert. "}</p>

                    <p>{"Pour réduire les émissions en France vous disposez de 2 outils : "}</p>
                    <ul>
                        <li>{"Le niveau de consommation énergétique séparé en 4 grands secteurs. Ce curseur représente"
                        + "en même temps notre niveau de sobriété (\"changement social et culturel\") et notre niveau"
                        + "d'efficacité énergétique (\"changement technique\")."}</li>
                        <li>{"Le mix énergétique proprement dit, c'est à dire la répartition de la production selon les énergies dans chaque secteur. "}</li>
                    </ul>
                    <p>{"A vous de jouer, bonne chance"}</p>
                    <Button bsStyle="primary" onClick={this.changePage.bind(this)}>Commencer !</Button>
                </DivTexte>
            </WrapperIntroduction>
        );
    }
}

Introduction.propTypes = {
    selectPage: PropTypes.func,
};

export default Introduction;
