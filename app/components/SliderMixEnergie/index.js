/**
*
* SliderMixEnergie
*
*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { SliderDiv } from './style';

class SliderMixEnergie extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      value: 100
    }
  }

  onSliderChange(value){
    // console.log(value);
    // console.log(this.props.consoType);
    this.props.ModifieValue(this.props.energieIndex, value);
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.energieName} {' - '} {this.state.value} {' %'}</p>
        <SliderDiv>
          <Slider
            min={0}
            max={100}
            onAfterChange={this.onSliderChange.bind(this)}
            defaultValue={100}
            />
        </SliderDiv>
      </div>
    );
  }
}

SliderMixEnergie.propTypes = {
  energieName: PropTypes.string,
  ModifieValue: PropTypes.func,
  energieIndex: PropTypes.number,
};

export default SliderMixEnergie;
