import React from 'react';

const KnowledgeCentre = () => {
    return (
        <div>
             {/* Banner Section */}
             <div className="banner" style={{ backgroundImage: `url(assets/knowledgecentre.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Knowledge Centre</h1>
            </div>
            <h2>Knowledge Centre</h2>
            <p>Educational resources and articles.</p>
        </div>
        
    );
};
// const KnowledgeCentre 
export default KnowledgeCentre;
