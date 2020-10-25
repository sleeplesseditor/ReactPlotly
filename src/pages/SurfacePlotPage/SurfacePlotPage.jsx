import React from 'react';
import '../page.scss';
import SurfacePlot from '../../components/Graphs/ThreeDimensional/SurfacePlot';

const SurfacePlotPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Surface Plot Graph</h2>
            <SurfacePlot />
        </div>
    )
}

export default SurfacePlotPage;