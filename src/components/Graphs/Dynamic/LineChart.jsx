import React from 'react';
import Plot from 'react-plotly.js';

const LineChart = ({ colour, financialItem, financialItemName }) => {
    return (
        <Plot
            data={[
                {
                    x: financialItem.financialChartXValues,
                    y: financialItem.financialChartCloseValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: colour},
                }
            ]}
            layout={{ width: 720, height: 440, title: financialItemName }}
            options ={ {displaylogo: 'false'} }
        />
    );
};

export default LineChart;