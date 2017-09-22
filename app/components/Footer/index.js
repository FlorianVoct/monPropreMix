/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { Wrapper, GroupeLogo, LogoList, Logo } from './style';
import EnercoopLogo from './images/enercoop-logo.svg';
import EnergiePartageeLogo from './images/EnergiePartageeLogo.jpg';
import IsfLogo from './images/ISF.png';
import RacLogo from './images/rac.png';
import ClerLogo from './images/cler.png';
import Negawatt from './images/negawatt.png';
import Ademe from './images/ademe.png';
import Rte from './images/rte.png';

function Footer() {
  return (
    <Wrapper>
        <GroupeLogo>
            <p>Pour agir : </p>
            <LogoList>
                <Logo><div><a href="http://www.enercoop.fr/"><img src={EnercoopLogo} className={'enercoop'} alt="Logo d'Enercoop"/></a></div></Logo>
                <Logo><div><a href="https://energie-partagee.org/"><img src={EnergiePartageeLogo} className={'energiePartagee'} alt="Logo d'Energie Partagee"/></a></div></Logo>
            </LogoList>
        </GroupeLogo>
        <GroupeLogo>
            <p>Pour comprendre et agir : </p>
            <LogoList>
                <Logo><div><a href="https://reseauactionclimat.org/"><img src={RacLogo} className={'rac'} alt="Logo d'Enercoop"/></a></div></Logo>
                <Logo><div><a href="https://cler.org/"><img src={ClerLogo} className={'cler'} alt="Logo d'Enercoop"/></a></div></Logo>
            </LogoList>
        </GroupeLogo>
        <GroupeLogo>
            <p>Pour comprendre : </p>
            <LogoList>
                <Logo><div><a href="https://negawatt.org/"><img src={Negawatt} className={'negawatt'} alt="Logo d'Enercoop"/></a></div></Logo>
                <Logo><div><a href="http://www.ademe.fr/mix-electrique-100-renouvelable-analyses-optimisations"><img src={Ademe} className={'ademe'} alt="Logo d'Enercoop"/></a></div></Logo>
                <Logo><div><a href="http://www.rte-france.com/fr/eco2mix/eco2mix-mix-energetique"><img src={Rte} className={'rte'} alt="Logo d'Enercoop"/></a></div></Logo>
            </LogoList>
        </GroupeLogo>
        <GroupeLogo>
            <p>Pour nous contacter : </p>
            <LogoList>
                <Logo><div><a href="https://www.isf-france.org/contact"><img src={IsfLogo} className={'isf'} alt="Logo d'Enercoop"/></a></div></Logo>
            </LogoList>
        </GroupeLogo>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
