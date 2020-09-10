import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';

const SurfacePlot = () => {
    const [plotData, setPlotData] = useState([])
    let i = 0;

    const dataFetch = () => { Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
        function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
        }

        for(i=0; i<24;i++) {
            setPlotData(unpack(rows,i));
        }
    })};

    useEffect(() => {
        dataFetch();
    }, []);

    const graphData = [{
        z: plotData,
        type: 'surface'
    }];

    const layout = {
        title: 'Mt Bruno Elevation',
        autosize: false,
        width: 500,
        height: 500,
        margin: {
            l: 65,
            r: 50,
            b: 65,
            t: 90,
        }
    };

    return (
        <div>
            <Plot 
                data={graphData}
                layout={layout}
                graphDiv="graph"
            />
        </div>
    );
}

export default SurfacePlot;