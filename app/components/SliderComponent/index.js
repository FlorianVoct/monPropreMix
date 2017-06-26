/**
*
* Slider
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { SliderDiv } from './style';

class SliderComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  onSliderChange(){
    console.log("changement dans le slider");
  }



  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <p>Un autre truc</p>
        <SliderDiv>
          <Slider
            min={12}
            max={78}
            onChange={this.onSliderChange.bind(this)}
            defaultValue={50}
            />
        </SliderDiv>
      </div>
    );
  }
}

SliderComponent.propTypes = {

};

export default SliderComponent;
