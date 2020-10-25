import React from 'react';
import GDPChoroplethMap from '../../components/Graphs/Maps/GDPChoroplethMap';
import '../page.scss';

const GDPChoroplethMapPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">GDP Choropleth Map</h2>
            <GDPChoroplethMap />
        </div>
    )
}

export default GDPChoroplethMapPage;