import React from 'react';
// import bannerImage from 'assets/whatsnew.jpeg'; // Adjust the path based on your folder structure

const WhatsNew = () => {
    return (
        <div id="whats-new">
            {/* Banner Section */}
            <div style={{ ...styles.banner, backgroundImage: `url(assets/whatsnew.jpeg)` }}>
                <div style={styles.overlay}></div>
                <h1 style={styles.bannerText}>What's New</h1>
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
    banner: {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '150px 0',  // Increase padding for more height
        textAlign: 'center',
        marginBottom: '50px',
        height: '500px',     // Explicit height setting for the banner
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        zIndex: 1,
    },
    bannerText: {
        position: 'relative',
        zIndex: 2,
        fontSize: '48px',
        margin: '0',
    },
    newsContent: {
        padding: '0px 70px 70px 70px',
    }
};

export default WhatsNew;
