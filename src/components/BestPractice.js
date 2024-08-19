import React, { useState } from 'react';

const BestPractice = () => {
    const [selectedSection, setSelectedSection] = useState('phishing');

    const renderContent = () => {
        switch (selectedSection) {
            case 'phishing':
                return (
                    <div style={styles.mainContent}>
                        <h2 style={styles.heading}>Recognize and Report Phishing</h2>
                        <p style={styles.text}>
                            Phishing is a common cyber threat where attackers attempt to trick individuals into providing personal information or clicking malicious links. These phishing attempts often appear as legitimate messages from trusted sources.
                        </p>
                        <h4 style={styles.subsubheading}>Common Types of Phishing Attacks:</h4>
                        <p>
                            <strong>Email Phishing: </strong>The most prevalent type, where attackers send deceptive emails that appear to be from legitimate organizations, aiming to steal personal data.

                        </p><p>
                            <strong>Spear Phishing: </strong>Targets specific individuals or companies, leveraging personalized details to enhance the credibility of the attack.
                        </p><p>
                            <strong>Whaling: </strong>Aimed at high-profile individuals, such as company executives, employing advanced social engineering tactics.
                        </p>
                        <p>
                            <strong>Smishing and Vishing: </strong>Involve the use of text messages and phone calls, respectively, to trick victims into revealing information or downloading malware.</p>

                        <img src="/assets/phishing-diagram.jpg" alt="Phishing Diagram" style={styles.image} />
                        <br />
                        <br />
                        <div>
                            <h2 style={styles.heading}>Real-Life Examples of Phishing</h2>
                            <p style={styles.text}>
                                According to NordLayer, Phishing remains a major threat to organizations, with 94% of organizations targeted and 96% suffering consequences. Here are some recent examples:
                            </p>
                            <h4 style={styles.subsubheading}>June 2023: JumpCloud Attack</h4>
                            <p style={styles.text}>
                                A North Korean threat actor launched a sophisticated phishing attack on JumpCloud, an identity management platform. By deceiving a software engineer, the attackers breached JumpCloud's systems, causing significant disruptions. Although the team took immediate action to limit the damage, the incident highlights the need for vigilance.
                            </p>
                            <h4 style={styles.subsubheading}>February 2023: Reddit's Response to Phishing</h4>
                            <p style={styles.text}>
                                Reddit was targeted by phishing that led to the compromise of employee credentials. An employee who recognized the phishing attempt reported it, allowing Reddit to take swift action. This underscores the importance of quick reporting and multi-factor authentication.
                            </p>
                            <h4 style={styles.subsubheading}>2019: Magellan Health Breach</h4>
                            <p style={styles.text}>
                                Magellan Health suffered a phishing attack that exposed the information of 270,000 individuals. An employee unknowingly provided credentials to attackers, resulting in unauthorized access and the dissemination of spam emails. Magellan settled related claims for $1.43 million.
                            </p>
                        </div>
                        <div>
                            <h2 style={styles.heading}>How to Prevent Phishing Attacks: Best Strategies</h2>
                            <p style={styles.text}>
                                Phishing attacks are a significant threat, but by implementing the following strategies, organizations can greatly reduce their risk:
                            </p>
                            <h4 style={styles.subsubheading}>1. Implement Advanced Email Filtering</h4>
                            <p style={styles.text}>
                                Advanced email filters are crucial in blocking phishing emails. These filters analyze incoming messages for signs of phishing and continually adapt to new threats. For example, Google's AI-driven security in Gmail blocks over 99.9% of spam, phishing, and malware daily, keeping users safe from nearly 15 billion unwanted emails.
                            </p>
                            <h4 style={styles.subsubheading}>2. Enforce Multi-Factor Authentication (MFA)</h4>
                            <p style={styles.text}>
                                MFA provides an additional layer of security by requiring multiple forms of verification, such as a code from your phone or a fingerprint, in addition to a password. This approach ensures that even if credentials are stolen, unauthorized access is prevented.
                            </p>
                            <h4 style={styles.subsubheading}>3. Regularly Update and Patch Systems</h4>
                            <p style={styles.text}>
                                Regular updates and patches close security gaps that could be exploited by phishing attacks. Keeping software up-to-date not only protects against phishing but also ensures compliance with data protection standards.
                            </p>
                            <h4 style={styles.subsubheading}>4. Conduct Phishing Simulation Exercises</h4>
                            <p style={styles.text}>
                                Phishing simulations test and improve your team's ability to recognize phishing attempts. These exercises allow teams to practice decision-making and refine their response to phishing attacks in a controlled environment.
                            </p>
                            <h4 style={styles.subsubheading}>5. Develop a Response Plan</h4>
                            <p style={styles.text}>
                                A well-defined response plan is critical for minimizing damage during a phishing attack. Establish clear steps for your team to follow when they detect phishing, including how to report incidents and who to notify.
                            </p>
                            <h4 style={styles.subsubheading}>6. Use Secure Web Gateways and DNS Filtering</h4>
                            <p style={styles.text}>
                                Secure Web Gateways (SWG) and DNS filtering block access to known malicious websites associated with phishing attacks. These tools prevent phishing attempts from reaching your network by scanning and filtering internet traffic.
                            </p>
                            <h4 style={styles.subsubheading}>7. Hold Regular Security Checks and Assessments</h4>
                            <p style={styles.text}>
                                Regular security assessments help identify vulnerabilities that could be exploited by phishing. These checks should include anti-phishing drills to strengthen your team's ability to detect and respond to phishing attempts.
                            </p>
                            <h4 style={styles.subsubheading}>8. Build a Culture of Reporting</h4>
                            <p style={styles.text}>
                                Encouraging a culture of reporting is essential in preventing phishing attacks. Employees should feel comfortable reporting suspicious activity without fear of repercussions, and recognizing those who report phishing attempts reinforces the importance of vigilance.
                            </p>
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JlQovysQBn0?si=7JS4txU0yaco5jUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p style={styles.reference}>NordLayer. (n.d.). How to prevent phishing attacks. NordLayer. <a href="https://nordlayer.com/blog/how-to-prevent-phishing-attacks/" target='blank'>https://nordlayer.com/blog/how-to-prevent-phishing-attacks/</a></p>

                        <p style={styles.reference}>Cybersecurity and Infrastructure Security Agency. (n.d.). Recognize and report phishing. Cybersecurity and Infrastructure Security Agency. <a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" target='blank'>https://www.cisa.gov/secure-our-world/recognize-and-report-phishing</a></p>
                    </div>
                );
            case 'password-security':
                return (
                    <div style={styles.mainContent}>
                        <h2 style={styles.heading}>Password Security</h2>
                        <p style={styles.text}>
                            Businesses must prioritize password security to protect users and sensitive information from breaches. A robust password policy is essential for maintaining security.
                        </p>
                        <h4 style={styles.subsubheading}>Network Security</h4>
                        <p style={styles.text}>
                            Weak passwords provide easy access for cybercriminals. During the 2020 pandemic, cyberattacks surged, with a significant percentage caused by compromised credentials. A strong password policy can prevent such attacks by making brute force attempts difficult.
                        </p>
                        <h4 style={styles.subsubheading}>Accountability</h4>
                        <p style={styles.text}>
                            A strong password policy should include multi-factor authentication (MFA), adding layers of security. This enables effective tracking of system activity and ensures user accountability.
                        </p>
                        <h4 style={styles.subsubheading}>Detection of Password Sharing or Reuse</h4>
                        <p style={styles.text}>
                            High password security helps detect unauthorized access, such as password sharing or reuse, ensuring that account integrity is maintained.
                        </p>
                        <div>
                            <h4 style={styles.subsubheading}>Strengthen Your Passwords with Simple Tips</h4>
                            <h4 style={styles.point}>Use Complex and Unique Passwords</h4>
                            <p style={styles.text}>
                                Incorporate a mix of uppercase and lowercase letters, numbers, and special characters. Avoid using easily guessable information. Each password should be unique for different accounts.
                            </p>
                            <h4 style={styles.point}>Opt for Longer Passwords</h4>
                            <p style={styles.text}>
                                Longer passwords are more secure. Aim for at least 12 characters, or consider a passphrase combining random words that's easy to remember but hard to guess.
                            </p>
                            <h4 style={styles.point}>Enable Multi-Factor Authentication (MFA)</h4>
                            <p style={styles.text}>
                                MFA adds a second layer of security by requiring additional verification, such as a text message code or an authentication app.
                            </p>
                            <h4 style={styles.point}>Regularly Update Your Passwords</h4>
                            <p style={styles.text}>
                                Regularly change your passwords, especially if you suspect a compromise. Avoid reusing old passwords.
                            </p>
                            <h4 style={styles.point}>Use a Password Manager</h4>
                            <p style={styles.text}>
                                A password manager helps create and store strong, unique passwords, reducing the risk of using weak or repeated passwords.
                            </p>
                            <h4 style={styles.point}>Be Cautious with Public Computers and Networks</h4>
                            <p style={styles.text}>
                                Avoid logging into sensitive accounts on public computers or unsecured networks to reduce the risk of interception.
                            </p>
                            <h4 style={styles.point}>Monitor for Compromised Accounts</h4>
                            <p style={styles.text}>
                                Use tools to check if your passwords have been exposed in a data breach, and change them immediately if they have.
                            </p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FZoB7yUGh7Y?si=9e9r4j9U4bUhhAAl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <p style={styles.reference}>Cybersecurity and Infrastructure Security Agency. (n.d.). Use Strong Passwords. Cybersecurity and Infrastructure Security Agency. <a href="https://www.cisa.gov/secure-our-world/use-strong-passwords" target='blank'>https://www.cisa.gov/secure-our-world/use-strong-passwords</a></p>
                            <p style={styles.reference}>Bluehost. (n.d.). Strong Password Policy. Bluehost. <a href="https://www.bluehost.com/blog/strong-password-policy/?utm_campaign=pmax_PPC&utm_source=googleads&utm_medium=genericsearch&channelid=P61C101S570N0B5578A2D4499E0000V338&ds_k=&gad_source=1&gclid=Cj0KCQjwt4a2BhD6ARIsALgH7DrqTIxEhgg1uD6esQMBwOwdaz3DjXob0LskCHN3HCkOduG-29O7OREaApjJEALw_wcB&gclsrc=aw.ds" target='blank'>https://www.bluehost.com/blog/strong-password-policy</a></p>

                        </div>
                    </div>
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

const styles = {
    container: {
        display: 'flex',
    },
    menu: {
        width: '300px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRight: '1px solid #ddd',
    },
    menuList: {
        listStyleType: 'none',
        padding: 0,
    },
    menuItem: {
        marginBottom: '15px',
    },
    activeMenuItem: {
        fontWeight: 'bold',
        color: '#007BFF',
    },
    content: {
        flex: 1,
        padding: '20px',
    },
    heading: {
        fontSize: '28px',
        marginBottom: '20px',
    },
    subheading: {
        fontSize: '24px',
        marginTop: '20px',
    },
    subsubheading: {
        fontSize: '20px',
        marginTop: '15px',
        textDecoration: "underline"
    },
    point: {
        fontSize: '16px',
        marginTop: '15px',
        color: '#007BFF'
    },
    text: {
        marginBottom: '15px',
    },
    list: {
        marginBottom: '15px',
        paddingLeft: '20px',
    },
    mainContent: {
        padding: '0px 70px 70px 70px',
    },
    reference: {
        color: "#808080",
        fontStyle: "italic",
    },
    image: {
        width: "600px"
    }
};

export default BestPractice;
