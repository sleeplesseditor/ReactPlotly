import React from 'react';
import '../page.scss';
import PieChart from '../../components/Graphs/Basic/PieChart';

const pieData = {
    type: "pie",
    values: [8149300, 4916438, 4776980, 3100950, 2083210],
    labels: ['Russia', 'Canada', 'Brazil', 'United States', 'China']
};

const layoutTitle = {
    title: "Area Under Forest for Different Countries"
};

const SurfacePlotPage = () => {
    return (
        <div className="page-container">
            <h2 className="page-continer-heading">Pie Chart</h2>
            <PieChart 
                data={[pieData]}
                layout={layoutTitle}
            />
        </div>
    )
}

export default SurfacePlotPage;