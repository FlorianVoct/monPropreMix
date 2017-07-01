/*
 *
 * EnergieMixPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectEnergieMixPage from './selectors';
import messages from './messages';

export class EnergieMixPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="EnergieMixPage"
          meta={[
            { name: 'description', content: 'Description of EnergieMixPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        {this.props.params.consommation}
      </div>
    );
  }
}

EnergieMixPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EnergieMixPage: makeSelectEnergieMixPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnergieMixPage);
