import React from 'react';
import './SurfacePlotPage.scss';
import SurfacePlot from '../../components/Graphs/ThreeDimensional/SurfacePlot';

const SurfacePlotPage = () => {
    return (
        <div className="page-container">
            <h2>Surface Plot Graph</h2>
            <SurfacePlot />
        </div>
    )
}

export default SurfacePlotPage;