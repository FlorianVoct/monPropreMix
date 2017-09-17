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

function Footer() {
  return (
    <Wrapper>
        <GroupeLogo>
            <p>Pour Agir : </p>
            <LogoList>
                <Logo><a href="http://www.enercoop.fr/"><img src={EnercoopLogo} className={'enercoop'} alt="Logo d'Enercoop"/></a></Logo>
                <Logo><a href="https://energie-partagee.org/"><img src={EnergiePartageeLogo} className={'energiePartagee'} alt="Logo d'Energie Partagee"/></a></Logo>
            </LogoList>
        </GroupeLogo>
        <GroupeLogo>
            <p>Pour nous contacter : </p>
            <LogoList>
                <Logo><a href="https://www.isf-france.org/contact"><img src={IsfLogo} className={'isf'} alt="Logo d'Enercoop"/></a></Logo>
            </LogoList>
        </GroupeLogo>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
