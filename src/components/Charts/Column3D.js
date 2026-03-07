import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const Column3D = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Most Popular",
      yAxisName: "Stars",
      xAxisName: "Repos",
      xAxisNameFontSize: "16px",
      yAxisNameFontSize: "16px",
      theme: "fusion",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type="column3d"
      width="100%"
      height="400"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Column3D;
