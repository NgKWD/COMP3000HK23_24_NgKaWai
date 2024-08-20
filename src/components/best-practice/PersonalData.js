import React from 'react';
import styles from '../styles';

const PersonalData = () => {
    return (
        <div style={styles.mainContent}>
            <h2 style={styles.heading}>Best Practices for Data Protection</h2>

            <ul style={styles.list}>
                <li>
                    <h4 style={styles.point}>Create Strong, Unique Passwords:</h4>
                    <p style={styles.text}>
                        Use passwords that are at least 12 characters long, combining uppercase and lowercase letters, numbers, and symbols. Avoid easily guessable information. Never reuse passwords across multiple accounts; use a password manager to store them securely.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Enable Two-Factor Authentication (2FA):</h4>
                    <p style={styles.text}>
                        2FA adds a layer of security by requiring a second verification step, such as a text message or authentication app code. This reduces the risk of account compromise even if your password is stolen.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Be Cautious with Public Wi-Fi:</h4>
                    <p style={styles.text}>
                        Avoid accessing sensitive accounts over public Wi-Fi. Use a VPN to encrypt your internet traffic if you must use public networks.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Keep Software Up-to-Date:</h4>
                    <p style={styles.text}>
                        Regular software updates patch security vulnerabilities. Enable automatic updates for your operating system, web browsers, and apps where possible.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Monitor Your Accounts Regularly:</h4>
                    <p style={styles.text}>
                        Regularly review bank statements, credit card transactions, and online accounts for unauthorized activity. Set up alerts for unusual transactions or logins.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Use a Password Manager:</h4>
                    <p style={styles.text}>
                        Password managers help generate and store strong, unique passwords for each account, reducing the risk of password reuse.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Regular Data Backups:</h4>
                    <p style={styles.text}>
                        Regularly back up important files and data to an external hard drive or cloud storage. This ensures you can recover your data in case of a breach or loss.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Be Vigilant About Phishing Scams:</h4>
                    <p style={styles.text}>
                        Phishing scams attempt to trick you into providing personal information. Verify the source of emails and messages, and look for signs of phishing, such as unexpected requests or poorly written messages.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Secure Your Devices:</h4>
                    <p style={styles.text}>
                        Install antivirus software and ensure your devices are protected by a firewall. Lock your devices when not in use, and consider enabling biometric authentication for added security.
                    </p>
                </li>

                <li>
                    <h4 style={styles.point}>Educate Yourself and Your Organization:</h4>
                    <p style={styles.text}>
                        Stay informed about the latest cybersecurity threats and best practices. Conduct regular training for yourself and your team to reduce the risk of cyberattacks.
                    </p>
                </li>
            </ul>

            <p style={styles.reference}>Digital Guardian. (n.d.). 101 Data Protection Tips: How to Keep Your Passwords, Financial & Personal Information Safe Online. Digital Guardian. <a href="https://www.digitalguardian.com/blog/101-data-protection-tips-how-keep-your-passwords-financial-personal-information-online-safe" target='blank'>https://www.digitalguardian.com/blog/101-data-protection-tips-how-keep-your-passwords-financial-personal-information-online-safe</a></p>
        </div>
    );
}

export default PersonalData;
