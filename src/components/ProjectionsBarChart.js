import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ProjectionsBarChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      style: {
        fontFamily: "Arial, sans-serif",
      },
    },
    title: {
      text: "",
      style: { color: "#FFF" },
    },
    xAxis: {
      categories: ["2025", "2026", "2027"],
      labels: {
        style: { color: "#FFF" },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "GWP (millions $)",
        style: { color: "#FFF" },
      },
      labels: {
        style: { color: "#FFF" },
      },
      gridLineColor: "rgba(255, 255, 255, 0.1)",
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>$${point.y} million</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      style: { color: "#FFF" },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      itemStyle: { color: "#FFF" },
      itemHoverStyle: { color: "#CCC" },
    },
    series: [
      {
        name: "Projected GWP",
        data: [
          { y: 12, color: "#FFB3BA" }, // Pastel pink
          { y: 20, color: "#BAFFC9" }, // Pastel green
          { y: 30, color: "#BAE1FF" }, // Pastel blue
        ],
      },
    ],
  };

  return (
    <div
      className="blur-bg"
      style={{ margin: "20px 0", padding: "20px", borderRadius: "10px" }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ProjectionsBarChart;
