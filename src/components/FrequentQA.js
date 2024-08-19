import React, { useState } from 'react';

const FrequentQA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "How can we secure data transmission on our website?",
            answer: "Use HTTPS to encrypt data in transit between your website and users, protecting it from interception. For more details, refer to NIST Special Publication 800-95 on Guide to Secure Web Services."
        },
        {
            question: "Why is monitoring and logging network activity important?",
            answer: "Monitoring and logging network activity helps detect suspicious behavior and aids in investigating incidents. See NIST Special Publication 800-92 for guidance on log management."
        },
        {
            question: "How should we protect our sensitive data?",
            answer: "Encrypt sensitive data both at rest and in transit to prevent unauthorized access. Refer to NIST Special Publication 800-175B on Cryptographic Mechanisms for more details."
        },
        {
            question: "What is the principle of least privilege and why is it important?",
            answer: "Implementing the principle of least privilege restricts access to data and systems, reducing the risk of insider threats. Refer to NIST Special Publication 800-53, AC-6 Least Privilege."
        },
        {
            question: "How often should we back up our data?",
            answer: "Regularly back up important data and secure the backups. This ensures data recovery in the event of a cyberattack or system failure. See NIST Special Publication 800-34 on Contingency Planning Guide for Federal Information Systems."
        },
        {
            question: "What is the recommended length for a strong password?",
            answer: "Aim for at least 12 characters for a strong password. Longer passwords or passphrases combining random words provide better security."
        },
        {
            question: "What are the benefits of Multi-Factor Authentication (MFA)?",
            answer: "MFA adds an extra layer of security by requiring additional verification, such as a text code or biometric authentication, beyond just a password."
        },
        {
            question: "Why is it important to update and patch systems regularly?",
            answer: "Regular updates and patches close security gaps that could be exploited by attackers, enhancing the security of your systems."
        },
        {
            question: "How can phishing simulation exercises help our organization?",
            answer: "Phishing simulations test your team's ability to recognize phishing attempts, improving their response to real threats."
        },
        {
            question: "What is the role of a password manager?",
            answer: "A password manager helps create and store strong, unique passwords securely, reducing the risk of using weak or repeated passwords."
        },
    ];

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url(assets/knowledgecentre.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Best Practice</h1>
            </div>
            <div style={styles.container}>
                <h1 style={styles.heading}>Frequently Asked Questions</h1>
                <div style={styles.accordion}>
                    {questions.map((item, index) => (
                        <div key={index} style={styles.item}>
                            <div style={styles.question} onClick={() => toggleActiveIndex(index)}>
                                {item.question}
                            </div>
                            {activeIndex === index && (
                                <div style={styles.answer}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

const styles = {
    container: {
        padding: '20px',
        padding: '20px 70px 70px 70px',
    },
    heading: {
        fontSize: '32px',
        marginBottom: '20px',
    },
    accordion: {
        width: '100%',
    },
    item: {
        marginBottom: '10px',
        borderBottom: '1px solid #ddd',
    },
    question: {
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: '10px 0',
    },
    answer: {
        padding: '10px 0',
        fontSize: '18px',
        color: '#555',
    },
};

export default FrequentQA;
