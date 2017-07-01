/*
 *
 * MixHomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectMixHomePage, {makeSelectNeeds} from './selectors';
import messages from './messages';

import SliderComponent from 'components/SliderComponent';
import PieGrapheComponent from 'components/PieGrapheComponent';
import {
  calculMixEnergetique,
  conso_initiale,
  transport_initiale,
  Chauffage_initiale,
  industrie_initiale,
  electricite_initiale,
} from 'components/Calculation';

import { modifieNeeds } from './actions';

import { PieChart, Pie } from 'recharts';


export class MixHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(){
    super();
    this.state = {
      activeIndex: 0,
    };
  }


  dispatchModifiedNeeds(value){
    this.props.dispatch(modifieNeeds(value));
  }


  onPieEnter(data, index) {
    console.log(index);
  }

  render() {
    let energie = calculMixEnergetique(
      conso_initiale,
      transport_initiale.ptg_init_transport,
      Chauffage_initiale.ptg_init_chauffage,
      industrie_initiale.ptg_init_industrie,
      electricite_initiale.ptg_init_electricite
    );
    const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
    let activeIndex = this.state.activeIndex;
    return (
      <div>
        <Helmet
          title="MixHomePage"
          meta={[
            { name: 'description', content: 'Description of MixHomePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <SliderComponent
            SliderTitle={"Un slider"}
            ModifieValue={this.dispatchModifiedNeeds.bind(this)}
            />
        {this.props.Needs}
        <PieGrapheComponent
         energie= {energie}
         />

      </div>
    );
  }
}

MixHomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MixHomePage: makeSelectMixHomePage(),
  Needs: makeSelectNeeds(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MixHomePage);
