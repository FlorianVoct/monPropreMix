/**
*
* Slider
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class SliderComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onSliderChange(){
    console.log("changement dans le slider");
  }



  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <p>Un autre truc</p>
        <div
          style={{height: 200 + "px"}, {display: "flex"}} >
          <Slider
            min={12}
            max={78}
            onChange={this.onSliderChange}
            defaultValue={50}
             >
             A Slider
             </Slider>

        </div>
      </div>
    );
  }
}

SliderComponent.propTypes = {

};

export default SliderComponent;
