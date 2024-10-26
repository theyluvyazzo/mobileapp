import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'green', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h1 style={{ fontStyle: 'italic' }}>Home Page</h1>
            <nav>
                <span>COURSES </span>
                <span>PRICING & DISCOUNT </span>
                <span>ABOUT US </span>
                <span>CONTACT US</span>
            </nav>
            <img src="/path/to/logo.png" alt="SME Logo" style={{ margin: '20px 0', width: '200px' }} />
            <p style={{ fontStyle: 'italic' }}>SME featuring a clean environment, corporate style.</p>
        </div>
    );
};

export default HomePage;
