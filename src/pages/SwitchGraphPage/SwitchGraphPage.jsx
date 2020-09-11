import React from 'react';
import './SwitchGraphPage.scss';
import SwitchGraph from '../../components/Graphs/ThreeDimensional/SwitchGraph';

const SwitchGraphPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Switch Graph</h2>
            <SwitchGraph />
        </div>
    )
}

export default SwitchGraphPage;