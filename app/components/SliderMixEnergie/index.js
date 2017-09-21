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

import { Wrapper, SliderDiv, InsidePanel, LineSlider, Icon, Value, LockIcon } from './style';
import { Button, Panel } from 'react-bootstrap';
import {FaLock, FaUnlock, FaHome, FaLightbulbO } from 'react-icons/lib/fa';

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

  componentWillMount(){
    this.setState({
      currentValue: this.props.constrainedValue
    })
  }

  onAfterSliderChange(value){
    this.props.ModifieValue(this.props.energieIndex, value);
  }

  changeLockState(){
    this.props.changeLockState(this.props.energieIndex, !this.props.lockState);
  }

  onSliderChange(value){
    this.setState({
      currentValue: value
    })
  }

  render() {
    let lockText = <FaLock size={25}/>;
    if(this.props.lockState){
      lockText = <FaUnlock size={25}/>;
    }
    let EnergieIcon = 'energieIcon';
    return (
      <Wrapper>
          <Panel header={this.props.energieName}>
              <InsidePanel>
                  <LineSlider>
                  <Icon>{EnergieIcon}</Icon>
                  <SliderDiv>
                      <Slider
                        min={0}
                        max={100}
                        onChange={this.onSliderChange.bind(this)}
                        onAfterChange={this.onAfterSliderChange.bind(this)}
                        value={this.state.currentValue}
                        />
                  </SliderDiv>
                  <Value>{this.state.currentValue} {' %'}</Value>
                  <LockIcon onClick={this.changeLockState.bind(this)} >{lockText}</LockIcon>
                  </LineSlider>
              </InsidePanel>
          </Panel>
      </Wrapper>
    );
  }
}

SliderMixEnergie.propTypes = {
  energieName: PropTypes.string,
  ModifieValue: PropTypes.func,
  energieIndex: PropTypes.number,
  constrainedValue: PropTypes.number,
  lockState: PropTypes.bool,
  changeLockState: PropTypes.func,
};

export default SliderMixEnergie;
