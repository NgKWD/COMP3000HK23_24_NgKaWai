import styles from '../styles';

const PasswordSec = () => {
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
    )
}
export default PasswordSec;