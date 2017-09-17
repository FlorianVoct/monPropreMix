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

  displayCO2Result(){
    let ges = this.props.ges();
    let ref = emmissionGES.emission1990;
    if(typeof ges.parHabitant === 'undefined'){
      ges.parHabitant = '--';
    }
    let hab = ges.total/ges.parHabitant;
    let objectifParHab = ref/hab/4;
    return(
      <p>
        {Math.round(ges.parHabitant*10)/10}
        {' tCO2/an/hab, l\'objectif est d\'atteindre '}
        {Math.round(objectifParHab*10)/10}{' tCO2/an/hab'}
      </p>
    )


  }


  render() {
    return (
      <Wrapper>
        {this.displayCO2Result()}
      </Wrapper>
    );
  }
}

BarCO2.propTypes = {
  // ges: PropTypes.number,
};

export default BarCO2;
