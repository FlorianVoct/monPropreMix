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
                    <h4>{"Notice : "}</h4>
                    <p>{"L'objectif est de diviser par 4 les émissions de gaz à effet de serre (GES) liées à l'énergie"
                    + "en France (par rapport à 1990), lorsque vous aurez réussie, le thermomètre ci-dessous"
                    + "sera vert, en attendant il vous indique les émissions de GES par habitant. "}</p>

                    <p>{"Pour réduire les émissions en France vous disposez de 3 outils : "}</p>
                    <ul>
                        <li>{"La population française"}</li>
                        <li>{"Le niveau de consommation énergétique pour des secteurs clés. Ce curseur représente"
                        + "en même temps notre niveau de sobriété (changement social et culturel) et notre niveau"
                        + "d'efficacité énergétique (changement technique)."}</li>
                        <li>{"La répartition de la production selon les énergies dans chaque secteur."}</li>
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
