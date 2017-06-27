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
      value: 100
    }
  }

  onSliderChange(value){
    console.log(value);
    this.props.ModifieValue(value);
    this.setState({
      value: value
    })
  }



  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <p>{this.props.SliderTitle} {this.state.value}</p>
        <SliderDiv>
          <Slider
            min={0}
            max={100}
            onChange={this.onSliderChange.bind(this)}
            defaultValue={100}
            />
        </SliderDiv>
      </div>
    );
  }
}

SliderComponent.propTypes = {
  SliderTitle: PropTypes.string,
  ModifieValue: PropTypes.func,


};

export default SliderComponent;
