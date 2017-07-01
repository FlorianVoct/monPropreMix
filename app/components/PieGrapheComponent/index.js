/**
*
* Slider
*
*/

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Container } from './style';
import ReactHighcharts from 'react-highcharts';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  enertxt,
} from 'components/Calculation';

const config = {

  chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares. January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Energie',
        data: [

        ]
    }]

};


class PieGrapheComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillReceiveProps(nextProps) {
    let chart = this.refs.chart.getChart();
    chart.series[0].setData([
        { name: enertxt[0], y: nextProps.energie[0] },
        { name: enertxt[1], y: nextProps.energie[1] },
        { name: enertxt[2], y: nextProps.energie[2] },
        { name: enertxt[3], y: nextProps.energie[3] },
        { name: enertxt[4], y: nextProps.energie[4] },
        { name: enertxt[5], y: nextProps.energie[5] },
        { name: enertxt[6], y: nextProps.energie[6] },
        { name: enertxt[7], y: nextProps.energie[7] },
        { name: enertxt[8], y: nextProps.energie[8] },
    ], true);
  }

  render() {
    return (
      <Container id="container">
        <ReactHighcharts
        config = {config}
        ref='chart'
        />
      </Container>
    );
  }
}

PieGrapheComponent.propTypes = {
  energie: PropTypes.array,
};

export default PieGrapheComponent;
