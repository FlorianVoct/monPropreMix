/**
*
* SliderMixEnergie
*
*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { SliderDiv } from './style';

class SliderMixEnergie extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state = {
      currentValue: 0,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      currentValue: nextProps.constrainedValue
    })
  }

  onAfterSliderChange(value){
    this.props.ModifieValue(this.props.energieIndex, value);
  }

  onSliderChange(value){
    this.setState({
      currentValue: value
    })
  }

  render() {
    console.log()
    return (
      <div>
        <p>{this.props.energieName} {' - '} {this.state.currentValue} {' %'}</p>
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

SliderMixEnergie.propTypes = {
  energieName: PropTypes.string,
  ModifieValue: PropTypes.func,
  energieIndex: PropTypes.number,
  constrainedValue: PropTypes.number,
};

export default SliderMixEnergie;
