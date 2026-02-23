import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

const Pie3D = ({ data }) => {
  // create an array of objects
  const chartData = Object.keys(data).map((key) => {
    return {
      label: key,
      value: data[key],
    };
  });

  const dataSource = {
    chart: {
      caption: "Languages",
      theme: "fusion",
      decimals: 2,
      pieRadius: "45%",
    },
    data: chartData,
  };

  return (
    <>
      <ReactFusioncharts
        type="pie3d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </>
  );
};

export default Pie3D;
