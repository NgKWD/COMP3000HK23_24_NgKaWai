import React, { useState } from 'react';
import PasswordSec from './best-practice/PasswordSec';
import Phishing from './best-practice/Phishing';
import PersonalData from './best-practice/PersonalData';
import styles from './styles';
import SocialMedia from './best-practice/SocialMedia';
import AccessControl from './best-practice/AccessControl';
import EmailSecurity from './best-practice/EmailSecurity';
import SecurityIncident from './best-practice/SecurityIncident';

const BestPractice = () => {
    const [selectedSection, setSelectedSection] = useState('phishing-summary');

    const handleSubMenuClick = (section) => {
        setSelectedSection(section);
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'yourself-phishing':
                return <Phishing />;
            case 'yourself-password':
                return <PasswordSec />;
            case 'yourself-data':
                return <PersonalData />;
            case 'yourself-social':
                return <SocialMedia />;
            case 'business-access':
                return <AccessControl />;
            case 'business-email':
                return <EmailSecurity />;
            case 'business-incident':
                return <SecurityIncident />;
            default:
                return <Phishing />;
        }
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bestpractice.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Best Practice</h1>
            </div>
            <div id="best-practice" style={styles.container}>
                {/* Left Menu */}
                <div style={styles.menu}>
                    <ul style={styles.menuList}>
                        <li style={styles.menuItem}>
                            <div style={selectedSection.startsWith('yourself') ? styles.activeMenuItem : null}>
                                Protect Yourself
                            </div>
                            <ul>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'yourself-phishing' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('yourself-phishing')}
                                >
                                    Recognize and Report Phishing
                                </li>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'yourself-password' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('yourself-password')}
                                >
                                    Password Security
                                </li>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'yourself-data' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('yourself-data')}
                                >
                                    Data Protection
                                </li>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'yourself-social' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('yourself-social')}
                                >
                                    Safe Online Social Networking
                                </li>
                            </ul>
                        </li>
                        <li style={styles.menuItem}>
                            <div style={selectedSection.startsWith('business') ? styles.activeMenuItem : null}>
                                Protect Your Business
                            </div>
                            <ul>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'business-access' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('business-access')}
                                >
                                    Access Control
                                </li>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'business-email' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('business-email')}
                                >
                                    Email Security
                                </li>
                                <li
                                    style={{
                                        ...styles.subMenuItem,
                                        color: selectedSection === 'business-incident' ? '#007BFF' : '#000',
                                    }}
                                    onClick={() => handleSubMenuClick('business-incident')}
                                >
                                    Security Incident Handling
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Content Section */}
                <div style={styles.content}>{renderContent()}</div>
            </div>
        </div>
    );
};

export default BestPractice;
