import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const BasicLine = () => {
    const [line1, setLine1] = useState({
        x: [-3, -2, -1],
        y: [1, 2, 3], 
        name: 'Line 1'
    });
    const [line2, setLine2] = useState({
        x: [1, 2, 3],
        y: [-3, -2, -1],
        name: 'Line 2'
    });
    const [revision, setRevision] = useState(0);
    const [layout, setLayout] = useState({ 
        datarevision: 0,
    })

    const rand = () => parseInt(Math.random() * 10 + revision, 10);

    const increaseGraphic = () => {
        line1.x.push(rand());
        line1.y.push(rand());
        if (line1.x.length >= 10) {
          line1.x.shift();
          line1.y.shift();
        } 
        line2.x.push(rand());
        line2.y.push(rand());
        if (line2.x.length >= 10) {
          line2.x.shift();
          line2.y.shift();
        }
        setRevision(revision + 1);
        layout.datarevision = revision + 1;
    }

    useEffect(() => {
        setInterval(increaseGraphic, 1000);
    }, []);

    return (
        <div>
            <Plot 
                data={[line1, line2 ]}
                layout={layout}
                revision={revision}
                graphDiv="graph"
            />
        </div>
    );
}

export default BasicLine;