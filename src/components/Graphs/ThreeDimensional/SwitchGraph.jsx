import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { ToggleButton } from '../../Toggle/Toggle';
import './SwitchGraph.scss';

const SwitchGraph = () => {
    const [dim3d, setDim3d] = useState(false);

    const getLayout = () => {
        let layout = {
            width: 640,
            height: 480,
            title: 'A 2D/3D Scatter Type Swapable Plot'
        };
        if (dim3d) {
            layout.scene = {
                aspectmode: 'data'
            }
        } else {
            layout.xaxis = {
                scaleanchor: 'y'
            }
        }
        return layout;
    }

    const data = {
        type: 'scatter',
        mode: 'lines+points',
        x: [1, 2, 3],
        y: [2, 6, 3],
        z: [1, 2, 4],
        marker: {color: 'red'}
    };
    let revision = 0;

    let layout = getLayout();
    let newData = {...data};
    if (dim3d) {
        newData.type = 'scatter3d';
        newData.mode = 'lines';
    }

    return (
        <div className="graph-container">
            <Plot 
                data={[newData]}
                layout={layout}
                revision={revision}
            />
            <div className="graph-container-btn">
                <ToggleButton
                    label={'Show 3D'}
                    selected={dim3d}
                    toggleSelected={() => {
                        {setDim3d(!dim3d); revision++ };
                    }}
                />
            </div>
        </div>
    )

}

export default SwitchGraph;