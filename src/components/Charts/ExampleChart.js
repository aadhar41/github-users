import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: "Recommended Portfolio Split",
      subcaption: "For a net-worth of $1M",
      showvalues: "1",
      showpercentintooltip: "0",
      numberprefix: "$",
      enablemultislicing: "1",
      theme: "candy"
    },
    data: [
      {
        label: "Equity",
        value: "300000"
      },
      {
        label: "Debt",
        value: "230000"
      },
      {
        label: "Bullion",
        value: "180000"
      },
      {
        label: "Real-estate",
        value: "270000"
      },
      {
        label: "Insurance",
        value: "20000"
      }
    ]
  },
};

class Chart extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}

export default Chart;