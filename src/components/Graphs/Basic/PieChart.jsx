import Plot from 'react-plotly.js';
import React from 'react';

const PieChart = ({ data, layout }) => {
    return (
        <div>
            <Plot 
                data={data}
                layout={layout}
            />
        </div>
    )
}

export default PieChart;