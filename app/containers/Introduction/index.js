/*
 *
 * Introduction
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class Introduction extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <FormattedMessage {...messages.notice} />
        <Footer />
      </div>
    );
  }
}

Introduction.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Introduction);
