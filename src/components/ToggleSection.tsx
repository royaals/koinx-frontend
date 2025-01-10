import React, { useState } from 'react';

function ToggleSection() {
    const [activeSection, setActiveSection] = useState('Overview');

    const sections = [
        'Overview',
        'Fundamentals',
        'News Insights',
        'Sentiments',
        'Team',
        'Technicals',
        'Tokenomics',
    ];

    return (
        <div>
            <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
                {sections.map((section) => (
                    <div
                        key={section}
                        className={`${
                            activeSection === section
                                ? 'text-[#0141CF] border-[#0052FE] border-b-4 pb-4'
                                : ''
                        } cursor-pointer`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section}
                    </div>
                ))}
            </div>
            <hr className=""></hr>
        </div>
    );
}

export default ToggleSection;