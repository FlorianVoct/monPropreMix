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
import { transport_initiale } from 'components/Calculation';

import SliderComponent from 'components/SliderComponent';

import { modifieNeeds } from './actions';


export class MixHomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  dispatchModifiedNeeds(value){
    this.props.dispatch(modifieNeeds(value));
  }

  render() {
    console.log(transport_initiale);
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
