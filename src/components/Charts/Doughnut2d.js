import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const Doughnut2D = ({ data }) => {
  const chartData = Object.keys(data).map((key) => {
    return {
      label: key,
      value: data[key],
    };
  });

  const dataSource = {
    chart: {
      caption: "Stars Per Language",
      theme: "fusion",
      decimals: 0,
      doughnutRadius: "45%",
      showPercentValues: 0,
    },
    data: chartData,
  };

  return (
    <ReactFusioncharts
      type="doughnut2d"
      width="100%"
      height="400"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Doughnut2D;