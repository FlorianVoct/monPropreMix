/**
*
* Slider
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

class SliderComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      currentValue: 100,
    }
  }

  componentWillMount(){
    this.setState({
      currentValue: this.props.constrainedValue
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      currentValue: nextProps.constrainedValue
    })
  }

  onAfterSliderChange(value){
    this.props.ModifieValue(this.props.consoType, value);
  }

  onSliderChange(value){
    this.setState({
      currentValue: value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.SliderTitle} {' - '} {this.state.currentValue} {' %'}</p>
        <SliderDiv>
          <Slider
            min={0}
            max={100}
            onChange={this.onSliderChange.bind(this)}
            onAfterChange={this.onAfterSliderChange.bind(this)}
            value={this.state.currentValue}
            />
        </SliderDiv>
      </div>
    );
  }
}

SliderComponent.propTypes = {
  SliderTitle: PropTypes.string,
  ModifieValue: PropTypes.func,
  consoType: PropTypes.string,
  constrainedValue: PropTypes.number,
};

export default SliderComponent;
