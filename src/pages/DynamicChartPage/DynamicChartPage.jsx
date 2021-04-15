import React, { useLayoutEffect, useRef, useState } from 'react';
import LineChart from '../../components/Graphs/Dynamic/LineChart'
import CandleStickChart from '../../components/Graphs/Dynamic/CandleStickChart';
import { connect } from 'react-redux';
import { getFinancialItem } from "../../actions/financialItemActions";
import '../page.scss';
import './DynamicChartPage.scss';

const DynamicChartPage = ({ financialItem: {financialItem }, getFinancialItem }) => {
    const [typeOfChart, setTypeOfChart] = useState('line');
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getFinancialItem('TSLA');
            return;
        }
    },[]);

    const handleChartChange = e => {
        setTypeOfChart(e.target.value);
    };

    const displayPlot = () => {
        switch (typeOfChart) {
            case 'line':
                return (<LineChart
                    color='green'
                    financialItem={financialItem}
                    financialItemName={financialItem.symbol}
                />);
            case 'candlestick':
                return (<CandleStickChart
                    financialItem={financialItem}
                    financialItemName={financialItem.symbol}
                />);
            default:
                return (<LineChart
                    color='green'
                    financialItem={financialItem}
                    financialItemName={financialItem.symbol}
                />);
        }
    };

    return (
        <div className='page-container'>
            <div>
                {financialItem ? displayPlot() : null }
            </div>
            {financialItem ? (
                <div className="chart-selection">
                    <label>Type of Chart:</label>
                    <select id="chart-select" onChange={handleChartChange} value={typeOfChart}>
                        <option value="line">Line</option>
                        <option value="candlestick">CandleStick</option>
                    </select>
                </div>
            ) : null}
        </div>
    );
};

const mapStateToProps = state => ({
    financialItem: state.financialItem
})

export default connect(mapStateToProps,{getFinancialItem})(DynamicChartPage);