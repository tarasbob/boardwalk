import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ProjectionsPieChart = () => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Arial, sans-serif'
      }
    },
    title: {
      text: '',
      style: { color: '#FFF' }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>${point.y} million</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: ${point.y} million',
          style: {
            color: '#FFF'
          }
        }
      }
    },
    series: [{
      name: 'Projected GWP',
      colorByPoint: true,
      data: [{
        name: '2025',
        y: 12,
        color: '#0066cc'  // Dark blue
      }, {
        name: '2026',
        y: 20,
        color: '#ff6600'  // Orange
      }, {
        name: '2027',
        y: 30,
        color: '#339933'  // Green
      }]
    }]
  };

  return (
    <div className="blur-bg" style={{ margin: '20px 0', padding: '20px', borderRadius: '10px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default ProjectionsPieChart;
