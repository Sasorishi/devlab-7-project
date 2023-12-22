import React, { useState } from 'react';
import BarChart from '../components/BarChartComponent';
import ColorPicker from '../components/ColorPickerComponent'

function BuilderChart() {
    const data = [20, 40, 60, 80, 100];
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const handleColorChange = (newColor) => {
        setSelectedColor(newColor);
    };

    return (
        <div className='mx-auto'>
            <h1>Bar Chart Example</h1>
            <ColorPicker onColorChange={handleColorChange} />
            <div className='mx-auto'>
                <BarChart data={data} selectedColor={selectedColor} />
            </div>
        </div>
    );
}
export default BuilderChart;
