import React from 'react';
import styles from './styles';

const UsefulResources = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/usefulresources.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Useful Resources</h1>
            </div>
            <div style={resourceStyles.mainContent}>
            <h2 style={styles.heading}>Useful Resources</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <a href="https://www.digitalguardian.com/blog/101-data-protection-tips-how-keep-your-passwords-financial-personal-information-online-safe" target="_blank" rel="noopener noreferrer">
                        101 Data Protection Tips: How to Keep Your Passwords, Financial & Personal Information Safe Online - Digital Guardian
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="https://www.infosec.gov.hk/en/best-practices/person/safe-online-social-networking" target="_blank" rel="noopener noreferrer">
                        Safe Online Social Networking - InfoSec Hong Kong
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="https://www.cisa.gov/ai" target="_blank" rel="noopener noreferrer">
                        AI Best Practices - Cybersecurity and Infrastructure Security Agency (CISA)
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" target="_blank" rel="noopener noreferrer">
                        Recognize and Report Phishing - CISA
                    </a>
                </li>
            </ul>
        </div>
        </div>
    );
};

const resourceStyles = {
    mainContent: {
        padding: '40px 70px 70px 70px',
    }
};

export default UsefulResources;
