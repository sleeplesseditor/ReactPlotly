import React from 'react';
import './LinePage.scss';
import BasicLineGraph from '../../components/Graphs/Basic/BasicLineGraph';

const LinePage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Basic Line Graph</h2>
            <BasicLineGraph />
        </div>
    )
}

export default LinePage;