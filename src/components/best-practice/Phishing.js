import styles from '../styles';

const Phishing = () => {
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

            <img src={`${process.env.PUBLIC_URL}/assets/phishing-diagram.jpg`} alt="Phishing Diagram" style={styles.image} />
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
}

export default Phishing;