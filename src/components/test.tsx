import React, { useState } from 'react';

const TestComponent: React.FC = () => {
    const [selected, setSelected] = useState('7D');

    const options = ['1H', '24H', '7D', '1M', '3M', '6M', '1Y', 'All'];

    return (
        <div className="lg:flex mb-4 justify-between">
            <div className="ls:text-lg text-sm font-semibold text-[#0B1426]">
                Bitcoin Price Chart (USD)
            </div>
            <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
                {options.map(option => (
                    <div
                        key={option}
                        className={`cursor-pointer ${selected === option ? 'text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1' : ''}`}
                        onClick={() => setSelected(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestComponent;