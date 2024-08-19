import React from 'react';

const KnowledgeCentre = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(assets/knowledgecentre.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Knowledge Centre</h1>
            </div>
            {/* Recent News Section */}
            <div style={styles.mainContent}>
                <h2>Knowledge Centre</h2>
                <p>Waht is Information Security</p>
                
            </div>
        </div>

    );
};
const styles = {
    mainContent: {
        padding: '0px 70px 70px 70px',
    }
};
export default KnowledgeCentre;
