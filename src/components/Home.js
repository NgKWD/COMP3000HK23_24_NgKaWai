import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/knowledgecentre.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Home</h1>
            </div>
            <div style={styles.home}>
                <h2>Welcome to Cyber Guardian</h2>
                <p>Cyber Guardian is dedicated to fostering a culture of cybersecurity awareness and proficiency. Our mission is to equip individuals with the knowledge and skills they need to navigate the digital world safely and confidently. Our platform is designed to achieve the following key objectives:</p>
                <ul>
                    <li>
                        <strong>Enhancing Fundamental Security Awareness:</strong>
                        We believe that security is everyone's responsibility. To this end, we offer comprehensive, ongoing training that covers the basics of cybersecurity. This training is mandatory for all members of the community, including staff, librarians, faculty, and students. Our programs not only provide essential knowledge but also include practical components such as periodic phishing simulations. These simulations help participants recognize and respond to phishing attempts, a common tactic used by cybercriminals to compromise sensitive information.
                    </li>
                    <li>
                        <strong>Offering Role-Specific Security Training:</strong>
                        Different roles within an organization face different cybersecurity challenges. Recognizing this, we offer specialized training that is tailored to the specific needs of various roles. For instance, application developers receive training focused on secure coding practices, while IT administrators learn about network security and system hardening. Researchers and other specialized roles are provided with targeted advice on protecting sensitive data and intellectual property. This role-based approach ensures that everyone receives the most relevant and impactful training, enhancing overall organizational security.
                    </li>
                    <li>
                        <strong>Building Advanced Security Skills:</strong>
                        As the cybersecurity landscape evolves, so too must the skills of those tasked with defending against threats. We offer advanced training opportunities for IT professionals and security specialists, focusing on the development of deep technical skills and the latest best practices. These opportunities include hands-on workshops, advanced courses, and certification programs designed to keep professionals at the forefront of cybersecurity. By investing in the continuous development of their skillsets, organizations can ensure that their IT teams are prepared to tackle even the most sophisticated cyber threats.
                    </li>
                </ul>
                <p>At Cyber Guardian, we are committed to empowering you with the tools and knowledge needed to protect yourself and your organization in an increasingly complex digital landscape. Join us in our mission to create a safer, more secure cyber environment for all.</p>

            </div>
        </div>

    );
};

const styles = {
    home: {
        padding: '40px 70px 70px 70px',
    }
};
export default Home;
