import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GWPChart = () => {
  const options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Arial, sans-serif'
      }
    },
    title: {
      text: 'Rapid Growth in GWP',
      style: { color: '#FFF' }
    },
    xAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      labels: { style: { color: '#FFF' } }
    },
    yAxis: {
      title: {
        text: 'GWP (millions $)',
        style: { color: '#FFF' }
      },
      labels: { style: { color: '#FFF' } },
      gridLineColor: 'rgba(255, 255, 255, 0.1)'
    },
    series: [
      {
        name: '2021',
        data: [0.2, 0.4, 0.7, 1.1],
        color: '#FFB3BA',  // Pastel pink
        lineWidth: 4
      },
      {
        name: '2022',
        data: [0.5, 1.0, 1.8, 2.5],
        color: '#BAFFC9',  // Pastel green
        lineWidth: 4
      },
      {
        name: '2023',
        data: [1.0, 2.0, 3.5, 5.0],
        color: '#BAE1FF',  // Pastel blue
        lineWidth: 4
      },
      {
        name: '2024',
        data: [1.5, 3.0, 5.0, 7.0],
        color: '#FFFFBA',  // Pastel yellow
        lineWidth: 4
      }
    ],
    legend: {
      itemStyle: { color: '#FFF' },
      itemHoverStyle: { color: '#CCC' }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      style: { color: '#FFF' },
      valuePrefix: '$',
      valueSuffix: ' million'
    },
    plotOptions: {
      line: {
        animation: true,
        marker: {
          radius: 6,
          symbol: 'circle',
          lineWidth: 2,
          lineColor: '#FFFFFF'
        }
      }
    }
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

export default GWPChart;
