import React from 'react';

const WhatsNew = () => {
    return (
        <div id="whats-new">
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(assets/whatsnew.jpeg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">What's New</h1>
            </div>
            {/* Recent News Section */}
            <div style={styles.newsContent}>
                <h2>Recent Cybersecurity News</h2>
                <ul>
                    <li>
                        <strong>New Ransomware Attack Targets Healthcare Industry</strong>
                        <p>The healthcare industry has been hit by a new wave of ransomware attacks, affecting patient data and disrupting services. Experts advise immediate implementation of advanced security measures.</p>
                    </li>
                    <li>
                        <strong>Zero-Day Vulnerability Found in Popular Web Browser</strong>
                        <p>A zero-day vulnerability has been discovered in a popular web browser, putting millions of users at risk. A patch has been released, and users are advised to update their browsers immediately.</p>
                    </li>
                    <li>
                        <strong>Cybersecurity Awareness Month Highlights Best Practices</strong>
                        <p>October is Cybersecurity Awareness Month, emphasizing the importance of securing digital identities and networks. Learn about best practices to protect yourself from cyber threats.</p>
                    </li>
                    <li>
                        <strong>Government Agencies Issue Warning on Phishing Scams</strong>
                        <p>Government agencies have issued a warning about a rise in phishing scams targeting individuals and businesses. Be cautious of suspicious emails and verify the sender before clicking any links.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    newsContent: {
        padding: '20px 70px 70px 70px',
    }
};

export default WhatsNew;
