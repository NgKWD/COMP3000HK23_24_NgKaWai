import React, { useState } from 'react';
import styles from './styles';

const KnowledgeCentre = () => {
    const [selectedSection, setSelectedSection] = useState('information-security');

    const renderContent = () => {
        switch (selectedSection) {
            case 'information-security':
                return (
                    <div style={styles.mainContent}>
                        <h2 style={styles.heading}>What is Information Security?</h2>
                        <img src={`${process.env.PUBLIC_URL}/assets/cia-diagram.jpg`} alt="C-I-A Model Diagram" style={styles.image} />
                        <p style={styles.text}>
                            Information is a vital asset for both individuals and businesses, making its protection crucial. Information Security involves safeguarding this valuable resource to ensure three core principles, often referred to as C-I-A:
                        </p>

                        <h3 style={styles.subheading}>C-I-A Model:</h3>

                        <h4 style={styles.subsubheading}>Confidentiality</h4>
                        <p style={styles.text}>
                            Ensuring that information is not disclosed to unauthorized individuals.
                        </p>
                        <ul style={styles.list}>
                            <li>
                                <strong>Personal Example:</strong> When you provide personal data to a website, it should only be accessed and used by designated staff within the company for agreed purposes. No one else should have the ability to misuse or view your data without permission.
                            </li>
                            <li>
                                <strong>Business Example:</strong> Sensitive data such as sales figures or client information should be accessible only to authorized personnel like senior management and the sales team, preventing unauthorized access by other departments.
                            </li>
                        </ul>

                        <h4 style={styles.subsubheading}>Integrity</h4>
                        <p style={styles.text}>
                            Protecting information from unauthorized modifications.
                        </p>
                        <ul style={styles.list}>
                            <li>
                                <strong>Personal Example:</strong> Your personal data, once submitted to a website, should remain unchanged during transmission and while being stored by the website.
                            </li>
                            <li>
                                <strong>Business Example:</strong> Important documents or figures should remain intact and unaltered by unauthorized individuals unless proper notification and authorization are provided.
                            </li>
                        </ul>

                        <h4 style={styles.subsubheading}>Availability</h4>
                        <p style={styles.text}>
                            Ensuring that information is accessible to authorized users whenever needed.
                        </p>
                        <ul style={styles.list}>
                            <li>
                                <strong>Personal Example:</strong> You should have the ability to access and review your personal data stored on a website at any time.
                            </li>
                            <li>
                                <strong>Business Example:</strong> Authorized management should be able to retrieve sales figures as needed, and clients should have access to their data stored by the company upon request.
                            </li>
                        </ul>
                        <p style={styles.reference}>Reference: Fortinet. (n.d.). CIA triad. Fortinet. <a href='https://www.fortinet.com/resources/cyberglossary/cia-triad' target='blank'>https://www.fortinet.com/resources/cyberglossary/cia-triad</a></p>
                    </div>
                );
            case 'why-important':
                return (
                    <div style={styles.mainContent}>
                        <h2 style={styles.heading}>Why Is Information Security So Important</h2>
                        <p style={styles.text}>
                            Information security is not just a concern for IT professionals; it affects everyone. Whether you're a business owner, an employee, or an individual, the security of your personal and professional information is crucial. Breaches in information security can lead to financial loss, legal issues, and damage to your reputation. Understanding and practicing good information security measures protects not only your data but also your personal and professional life.
                        </p>
                        <p style={styles.text}>
                            In the digital age, where data breaches and cyber threats are becoming increasingly common, being informed and proactive about information security is more important than ever. Protecting sensitive information from unauthorized access, ensuring data integrity, and maintaining availability of information are essential steps everyone must take to safeguard their assets.
                        </p>
                    </div>
                );
            case 'top-threats':
                return (
                    <div style={styles.mainContent}>
                        <h2 style={styles.heading}>Top Information Security Threats</h2>
                        <p style={styles.text}>
                            In the ever-evolving landscape of cybersecurity, organizations face a multitude of information security threats, each with the potential to cause significant harm. Below are some of the critical threats that security teams prioritize in modern enterprises:
                        </p>
                        <h4 style={styles.subsubheading}>Unsecured or Poorly Secured Systems</h4>
                        <p style={styles.text}>
                            The rapid pace of technological advancement often leads to security measures being overlooked or compromised. In some cases, systems are developed without security considerations and continue to operate as legacy systems within an organization. Identifying and addressing these vulnerable systems is crucial, whether by securing and patching them, decommissioning outdated systems, or isolating them from the network.
                        </p>
                        <h4 style={styles.subsubheading}>Social Media Attacks</h4>
                        <p style={styles.text}>
                            With widespread use of social media, individuals often unknowingly share personal information that can be exploited by attackers. Cybercriminals can directly target users through social media by spreading malware or indirectly by gathering information from these platforms to craft targeted attacks against individuals or organizations.
                        </p>
                        <h4 style={styles.subsubheading}>Social Engineering</h4>
                        <p style={styles.text}>
                            Social engineering involves manipulating individuals into performing actions or divulging confidential information by exploiting psychological triggers such as curiosity, urgency, or fear. These attacks are particularly dangerous because they appear to come from trusted sources, leading users to unknowingly compromise their security. Educating users and implementing technological safeguards can significantly reduce the risk of social engineering attacks.
                        </p>
                        <h4 style={styles.subsubheading}>Malware on Endpoints</h4>
                        <p style={styles.text}>
                            As organizational users increasingly work with a variety of endpoint devices—ranging from desktops and laptops to tablets and smartphones—many of which are personally owned and not under the organization's control, these devices become prime targets for malware. Modern malware can compromise these endpoints and escalate privileges to access other organizational systems. Advanced security measures, such as Endpoint Detection and Response (EDR), are necessary to protect against these threats, as traditional antivirus solutions are no longer sufficient.
                        </p>
                        <h4 style={styles.subsubheading}>Lack of Encryption</h4>
                        <p style={styles.text}>
                            Encryption is a critical security measure that encodes data, making it accessible only to those with the correct decryption keys. It is an effective way to prevent data breaches or corruption, especially in cases of equipment loss or system compromise. However, due to the complexity and lack of mandatory regulations, encryption is often neglected. Organizations are increasingly adopting encryption through secure storage devices, cloud services, and specialized security tools.
                        </p>
                        <h4 style={styles.subsubheading}>Security Misconfiguration</h4>
                        <p style={styles.text}>
                            Modern organizations rely on a wide array of technological platforms, including web applications, databases, and cloud services like Software as a Service (SaaS) and Infrastructure as a Service (IaaS). These platforms offer robust security features, but they require proper configuration by the organization. Security misconfigurations, often caused by human error or neglect, can lead to severe vulnerabilities. Additionally, "configuration drift"—the gradual degradation of initially secure configurations—can occur, making systems vulnerable without the knowledge of IT staff. Continuous monitoring and automated remediation tools can help mitigate these risks.
                        </p>
                        <p style={styles.reference}>Reference: Imperva. (n.d.). What is information security?. Imperva. <a href="https://www.imperva.com/learn/data-security/information-security-infosec/" target='blank'>https://www.imperva.com/learn/data-security/information-security-infosec/</a></p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/knowledgecentre.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Knowledge Centre</h1>
            </div>
            <div style={styles.container}>
                {/* Left Menu */}
                <div style={styles.menu}>
                    <ul style={styles.menuList}>
                        <li style={styles.menuItem} onClick={() => setSelectedSection('information-security')}>
                            <a href="#!" style={selectedSection === 'information-security' ? styles.activeMenuItem : null}>What is Information Security?</a>
                        </li>
                        <li style={styles.menuItem} onClick={() => setSelectedSection('why-important')}>
                            <a href="#!" style={selectedSection === 'why-important' ? styles.activeMenuItem : null}>Why Is Information Security So Important</a>
                        </li>
                        <li style={styles.menuItem} onClick={() => setSelectedSection('top-threats')}>
                            <a href="#!" style={selectedSection === 'top-threats' ? styles.activeMenuItem : null}>Top Information Security Threats</a>
                        </li>
                    </ul>
                </div>

                {/* Content Section */}
                <div style={styles.content}>
                    {renderContent()}

                </div>
            </div>
        </div>
    );
};

// const styles = {
//     container: {
//         display: 'flex',
//     },
//     menu: {
//         width: '300px',
//         padding: '20px',
//         backgroundColor: '#f4f4f4',
//         borderRight: '1px solid #ddd',
//     },
//     menuList: {
//         listStyleType: 'none',
//         padding: 0,
//     },
//     menuItem: {
//         marginBottom: '15px',
//     },
//     activeMenuItem: {
//         fontWeight: 'bold',
//         color: '#007BFF',
//     },
//     content: {
//         flex: 1,
//         padding: '20px',
//     },
//     heading: {
//         fontSize: '28px',
//         marginBottom: '20px',
//     },
//     subheading: {
//         fontSize: '24px',
//         marginTop: '20px',
//     },
//     subsubheading: {
//         fontSize: '20px',
//         marginTop: '15px',
//         textDecoration: "underline"
//     },
//     text: {
//         marginBottom: '15px',
//     },
//     list: {
//         marginBottom: '15px',
//         paddingLeft: '20px',
//     },
//     mainContent: {
//         padding: '0px 70px 70px 70px',
//     },
//     reference: {
//         color: "#808080",
//         fontStyle: "italic",
//     }
// };

export default KnowledgeCentre;
