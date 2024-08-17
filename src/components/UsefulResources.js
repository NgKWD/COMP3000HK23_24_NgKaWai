import React from 'react';

const UsefulResources = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(assets/usefulresources.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Useful Resources</h1>
            </div>
            <h2>Useful Resources</h2>
            <p>Links and tools for cybersecurity.</p>
        </div>
    );
};

export default UsefulResources;
