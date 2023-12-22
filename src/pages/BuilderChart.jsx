import React from 'react';
import BarChart from '../components/BarChartComponent';

function BuilderChart() {
    const data = [20, 40, 60, 80, 100];

    return (
        <div className='mx-auto'>
            <h1>Bar Chart Example</h1>
            <div className='mx-auto'>
                <BarChart data={data} />
            </div>
        </div>
    );
}
export default BuilderChart;
