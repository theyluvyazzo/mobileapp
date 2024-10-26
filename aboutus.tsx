import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'green', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ fontStyle: 'italic' }}>ABOUT US</h2>
            <p>"SME is committed to empowering small and medium-sized enterprises by providing innovative solutions that drive growth, efficiency, and sustainability. We aim to foster long-term success for our clients by offering personalized services, cutting-edge technology, and a dedication to excellence in every partnership."</p>
            <p>This mission emphasizes SME's role in supporting businesses and highlights core values such as innovation, growth, and client success.</p>
            <button style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', borderRadius: '5px' }}>CONTINUE</button>
        </div>
    );
};

export default AboutUs;
