import React from 'react';

const CourseSelection: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'green', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ fontStyle: 'italic' }}>COURSE SELECTION</h2>
            <p>Select from our wide range of 6-week and 6-month courses designed to meet the needs of various industries.</p>
            <ul>
                <li>Course 1 - 6 weeks</li>
                <li>Course 2 - 6 months</li>
                <li>Course 3 - 6 weeks</li>
                <li>Course 4 - 6 months</li>
                <li>Course 5 - 6 weeks</li>
                <li>Course 6 - 6 months</li>
            </ul>
        </div>
    );
};

export default CourseSelection;
