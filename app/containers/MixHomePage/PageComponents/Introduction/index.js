/*
*
* Introduction
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
    conso_initiale,
    transport_initiale,
    chauffage_initiale,
    industrie_initiale,
    electricite_initiale
} from 'components/Calculation';

import { Wrapper } from './../../style';

export class Introduction extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    changePage(){
        this.props.selectPage('HomeMix');
    }

    render() {
        return (
            <Wrapper>
                <FormattedMessage {...messages.notice} />
                <div
                    onClick={this.changePage.bind(this)}
                    >
                    Commencer !
                </div>
            </Wrapper>
        );
    }
}

Introduction.propTypes = {
    selectPage: PropTypes.func,
};

export default Introduction;
