/**
*
* BarCO2
*
* Permet d'afficher le niveau d'émission de C02
*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import {
  Wrapper,
  BarDiv,
  BarElement,
  RectangleDeCouleur,
  LegendDiv,
  LegendElement,
  COLORS,
} from './style';

import {
  emmissionGES,
} from 'components/Calculation';

class BarCO2 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  buildBar(){
    console.log(this.props.ges);
    let ges = this.props.ges;
    if(typeof ges === 'undefined'){
      ges = emmissionGES.emission1990;
    }
    let ref = emmissionGES.emission1990;
    let min = 0;
    let max = 1.25;
    let beginOrange = 0.5;
    let beginGreen = 0.25;

    let height = 400-30;
    let totalElement = 25;
    let elementHeight = height / totalElement;

    let bar = [];
    for(let i = 0; i < totalElement; i++)
  	{
      let couleur = COLORS.rougeInactif;
      if(i >= (totalElement*(1 - ges/(max*ref)))){
        couleur = COLORS.rougeActif;
      }
      if(i >= (totalElement* (1 - beginOrange/max))){
        couleur = COLORS.orangeInactif;
        if(i >= (totalElement*(1 - ges/(max*ref)))){
          couleur = COLORS.orangeActif;
        }
      }
      if(i >= (totalElement* (1 - beginGreen/max))){
        couleur = COLORS.vertInactif;
        if(i >= (totalElement*(1 - ges/(max*ref)))){
          couleur = COLORS.vertActif;
        }
      }



      // couleur = couleur + 'Actif';
      // if(i > 50){
      //   bar.push(<BarElement key={i} className={"red"} />);
      // }else{
      //
      // }
      // let classLine = 'noline';
      // if(i % 10 === 0){
      //   classLine = 'line';
      // }
      // console.log(classLine);
      bar.push(
        <BarElement key={i}
            elementHeight={elementHeight}
            >
          <RectangleDeCouleur
            couleur={couleur}
            />
        </BarElement>
      );
    }
    return bar;
  }

  buildLegend(){
    let Legend = [];
    Legend.push(
      <LegendElement key={2} className={"emission1990"}>
        {"Emmission de GES en 1990"}
      </LegendElement>
    );
    Legend.push(
      <LegendElement key={4} className={"Objectif"}>
        {"Objectif facteur 4 en 2050"}
      </LegendElement>
    );
    return Legend;
  }

  render() {
    return (
      <Wrapper>
        <BarDiv>
          {this.buildBar()}
        </BarDiv>
        <LegendDiv>
          {this.buildLegend()}
        </LegendDiv>
      </Wrapper>
    );
  }
}

BarCO2.propTypes = {
  ges: PropTypes.number,
};

export default BarCO2;
