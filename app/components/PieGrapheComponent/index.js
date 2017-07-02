/**
*
* PieChart
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

const config = {

  chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
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
        name: 'Energies',
        data: []
    }],
    credits: {
      enabled: false,
    }
};


class PieGrapheComponent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillReceiveProps(nextProps) {
    let chart = this.refs.chart.getChart();
    chart.series[0].setData(nextProps.energieGrapheList, true);
    chart.setTitle({ text: this.props.grapheTitle}, true);
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
  // tableau formaté pour être les data du graphe, cad une liste d'objet avec les
  // paramètres name et y
  energieGrapheList: PropTypes.array,
  grapheTitle: PropTypes.string,
};

export default PieGrapheComponent;
