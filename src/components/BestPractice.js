import React, { useState } from 'react';
import PasswordSec from './best-practice/PasswordSec';
import styles from './styles';
import Phishing from './best-practice/Phishing';

const BestPractice = () => {
    const [selectedSection, setSelectedSection] = useState('phishing');

    const renderContent = () => {
        switch (selectedSection) {
            case 'phishing':
                return (
                    <Phishing />
                );
            case 'password-security':
                return (
                    <PasswordSec />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(assets/knowledgecentre.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Best Practice</h1>
            </div>
            <div id="best-practice" style={styles.container}>
                {/* Left Menu */}
                <div style={styles.menu}>
                    <ul style={styles.menuList}>
                        <li style={styles.menuItem} onClick={() => setSelectedSection('phishing')}>
                            <a href="#!" style={selectedSection === 'phishing' ? styles.activeMenuItem : null}>Recognize and Report Phishing</a>
                        </li>
                        <li style={styles.menuItem} onClick={() => setSelectedSection('password-security')}>
                            <a href="#!" style={selectedSection === 'password-security' ? styles.activeMenuItem : null}>Password Security</a>
                        </li>
                    </ul>
                </div>

                {/* Content Section */}
                <div style={styles.content}>
                    {renderContent()}
                </div>
            </div></div>
    );
};

export default BestPractice;
