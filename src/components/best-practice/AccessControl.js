import styles from '../styles';

const AccessControl = () => {
    return (
        <div>
            <div style={styles.mainContent}>
                <h2 style={styles.heading}>Access Control for Businesses</h2>

                <h3 style={styles.subheading}>What is Access Control?</h3>
                <p style={styles.text}>
                    Access control is a security measure used to regulate who can view, use, or modify resources within an organization. It ensures that only authorized individuals have access to specific data, systems, or physical locations, reducing the risk of unauthorized access and data breaches.
                </p>

                <h3 style={styles.subheading}>Different Types of Access Control</h3>
                <ul style={styles.list}>
                    <li>
                        <strong>Discretionary Access Control (DAC):</strong> The owner of the resource decides who can access it.
                    </li>
                    <li>
                        <strong>Mandatory Access Control (MAC):</strong> Access is granted based on regulations and strict policies defined by a central authority.
                    </li>
                    <li>
                        <strong>Role-Based Access Control (RBAC):</strong> Access is determined by the user’s role within the organization.
                    </li>
                    <li>
                        <strong>Attribute-Based Access Control (ABAC):</strong> Access is granted based on attributes like user characteristics, environment conditions, and resource type.
                    </li>
                </ul>

                <h3 style={styles.subheading}>Security Tips</h3>
                <ul style={styles.list}>
                    <li>
                        <strong>Implement Strong Password Policies:</strong> Ensure all access points are protected by strong, unique passwords.
                    </li>
                    <li>
                        <strong>Regularly Audit Access Rights:</strong> Frequently review and update access permissions to ensure they align with current roles and responsibilities.
                    </li>
                    <li>
                        <strong>Use Multi-Factor Authentication (MFA):</strong> Add an extra layer of security by requiring multiple forms of verification before granting access.
                    </li>
                    <li>
                        <strong>Monitor and Log Access:</strong> Keep track of who accesses critical resources and when to detect any unauthorized attempts.
                    </li>
                    <li>
                        <strong>Limit Access to Critical Information:</strong> Only allow access to sensitive information to those who absolutely need it.
                    </li>
                </ul>
                <p style={styles.reference}>Fortinet. (n.d.). Access Control. Fortinet. <a href="https://www.fortinet.com/resources/cyberglossary/access-control#:~:text=Access%20control%20is%20a%20data,levels%20are%20granted%20to%20users." target='blank'>https://www.fortinet.com/resources/cyberglossary/access-control</a></p>
                <p style={styles.reference}>InfoSec Hong Kong. (n.d.). Control Access to Critical Information. InfoSec Hong Kong. <a href="https://www.infosec.gov.hk/en/best-practices/business/control-access-to-critical-information" target='blank'>https://www.infosec.gov.hk/en/best-practices/business/control-access-to-critical-information</a></p>

            </div>
        </div>
    )
};
export default AccessControl;