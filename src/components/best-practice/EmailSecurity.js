import styles from '../styles';

const EmailSecurity = () => {
    return (
        <div style={styles.mainContent}>
            <h2 style={styles.heading}>Business Email Security</h2>

            <h3 style={styles.subheading}>What is Email Security?</h3>
            <p style={styles.text}>
                Email security refers to the processes, tools, and technologies designed to protect email accounts, communications, and content from unauthorized access, loss, or compromise. It includes measures like authentication, encryption, and filtering to prevent threats like phishing, malware, and spoofing.
            </p>

            <h3 style={styles.subheading}>Why is Email Security so Important?</h3>
            <p style={styles.text}>
                Email is a fundamental communication tool for businesses, making it a prime target for cybercriminals. Email-based attacks can lead to financial losses, data breaches, and reputational damage. Robust email security helps protect sensitive information, maintain trust, and comply with regulations.
            </p>

            <h3 style={styles.subheading}>Best Practices for Email Security</h3>
            <ul style={styles.list}>
                <li><strong>Use Multi-Factor Authentication (MFA):</strong> Adds an extra layer of security even if credentials are stolen.</li>
                <li><strong>Implement Advanced Email Filtering:</strong> Blocks phishing attempts, malware, and suspicious attachments before they reach inboxes.</li>
                <li><strong>Regular Employee Training:</strong> Educate employees to recognize and report phishing and other email-based threats.</li>
                <li><strong>Encrypt Sensitive Communications:</strong> Protects sensitive data during transmission to prevent interception.</li>
                <li><strong>Monitor and Respond to Threats:</strong> Continuously monitor email systems for unusual activity and respond promptly to security incidents.</li>
            </ul>

            <p style={styles.reference}>Proofpoint. (n.d.). Email Security. Proofpoint. <a href="https://www.proofpoint.com/us/threat-reference/email-security" target='blank'>https://www.proofpoint.com/us/threat-reference/email-security</a></p>

        </div>
    )
}

export default EmailSecurity;