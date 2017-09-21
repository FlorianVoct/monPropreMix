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
  Result,
  Obj
} from './style';

import {
  emmissionGES,
} from 'components/Calculation';

import { Panel } from 'react-bootstrap';

class BarCO2 extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  displayCO2Result(){
    let ges = this.props.ges();
    let ref = emmissionGES.emission1990;
    let color = 'grey';
    let objectifParHab = '--';
    if(typeof ges.parHabitant === 'undefined'){
      ges.parHabitant = '--';
    }else{
        let hab = ges.total/ges.parHabitant;
        objectifParHab = ref/hab/4;
        if(ges.parHabitant > 2*objectifParHab){
            color = 'rouge';
        }
        if(ges.parHabitant < 2*objectifParHab){
            color = 'orange';
        }
        if(ges.parHabitant < objectifParHab){
            color = 'vert';
        }
    }
    return(
      <p>
        <Result className={color}>{Math.round(ges.parHabitant*10)/10}</Result>
        {' tCO2/an/hab, l\'objectif est d\'atteindre '}
        <Obj>{Math.round(objectifParHab*10)/10}</Obj>
        {' tCO2/an/hab'}
      </p>
    )


  }


  render() {
    return (
      <Wrapper>
        <Panel>
            {this.displayCO2Result()}
        </Panel>
      </Wrapper>
    );
  }
}

BarCO2.propTypes = {
  // ges: PropTypes.number,
};

export default BarCO2;
