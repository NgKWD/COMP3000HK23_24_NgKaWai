import React from 'react';
import styles from '../styles';

const SocialMedia = () => {
    return (
        <div style={styles.mainContent}>
            <h2 style={styles.heading}>Safe Online Social Networking</h2>

            <ul style={styles.list}>
                <li>
                    <h4 style={styles.point}>Protect Personal Information:</h4>
                    <p style={styles.text}>
                        Limit the amount of personal information shared online. Avoid posting sensitive details such as your address, phone number, or financial information.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Adjust Privacy Settings:</h4>
                    <p style={styles.text}>
                        Regularly review and adjust the privacy settings on your social networking accounts to control who can see your information.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Be Cautious with Connections:</h4>
                    <p style={styles.text}>
                        Only accept connection requests from people you know. Be wary of strangers who may have malicious intentions.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Think Before You Post:</h4>
                    <p style={styles.text}>
                        Consider the potential impact of your posts on your reputation and privacy. Remember that what you share online can be difficult to remove.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Use Strong, Unique Passwords:</h4>
                    <p style={styles.text}>
                        Ensure your social networking accounts are protected with strong, unique passwords, and enable two-factor authentication where available.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Beware of Phishing Attacks:</h4>
                    <p style={styles.text}>
                        Be cautious of suspicious messages or links sent through social networks. Phishing attacks can lead to identity theft and account compromise.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Monitor Account Activity:</h4>
                    <p style={styles.text}>
                        Regularly check your account activity for any unauthorized access or unusual behavior. Report any suspicious activity to the platform immediately.
                    </p>
                </li>
            </ul>
            <p style={styles.reference}>InfoSec Hong Kong. (n.d.). Handling Personal Information. InfoSec Hong Kong. <a href="https://www.infosec.gov.hk/en/best-practices/person/handling-personal-information" target='blank'>https://www.infosec.gov.hk/en/best-practices/person/handling-personal-information</a></p>

        </div>
    );
};

export default SocialMedia;
