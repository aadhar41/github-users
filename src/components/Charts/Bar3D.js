import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const Bar3D = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Most Forked",
      yAxisName: "Forks",
      xAxisName: "Repos",
      xAxisNameFontSize: "16px",
      yAxisNameFontSize: "16px",
      theme: "fusion",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type="bar3d"
      width="100%"
      height="400"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Bar3D;
