import React, { useState } from 'react';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            questionText: "Why is it important to use complex and unique passwords for different accounts?",
            answerOptions: [
                { answerText: "It makes it easier to remember passwords.", isCorrect: false },
                { answerText: "It reduces the risk if one password is compromised.", isCorrect: true },
                { answerText: "It helps in sharing passwords easily.", isCorrect: false },
                { answerText: "It allows the use of common words.", isCorrect: false },
            ],
        },
        {
            questionText: "What is the recommended minimum length for a strong password?",
            answerOptions: [
                { answerText: "8 characters", isCorrect: false },
                { answerText: "10 characters", isCorrect: false },
                { answerText: "12 characters", isCorrect: true },
                { answerText: "15 characters", isCorrect: false },
            ],
        },
        {
            questionText: "How does Multi-Factor Authentication (MFA) enhance security?",
            answerOptions: [
                { answerText: "It requires only a password to access an account.", isCorrect: false },
                { answerText: "It adds an extra layer of verification.", isCorrect: true },
                { answerText: "It automatically changes passwords.", isCorrect: false },
                { answerText: "It allows for password reuse.", isCorrect: false },
            ],
        },
        {
            questionText: "Why should you regularly update your passwords?",
            answerOptions: [
                { answerText: "To reuse old passwords.", isCorrect: false },
                { answerText: "To keep accounts secure, especially after a suspected compromise.", isCorrect: true },
                { answerText: "To make passwords easier to remember.", isCorrect: false },
                { answerText: "To allow public sharing of passwords.", isCorrect: false },
            ],
        },
        {
            questionText: "What is the benefit of using a password manager?",
            answerOptions: [
                { answerText: "It helps create and store strong, unique passwords.", isCorrect: true },
                { answerText: "It reduces the need for password changes.", isCorrect: false },
                { answerText: "It encourages the use of the same password for all accounts.", isCorrect: false },
                { answerText: "It stores passwords in plain text.", isCorrect: false },
            ],
        },
        {
            questionText: "What should you avoid when creating a password?",
            answerOptions: [
                { answerText: "Using a mix of letters, numbers, and special characters.", isCorrect: false },
                { answerText: "Using your birthday or common words.", isCorrect: true },
                { answerText: "Using at least 12 characters.", isCorrect: false },
                { answerText: "Creating a unique password for each account.", isCorrect: false },
            ],
        },
        {
            questionText: "Why is it important to be cautious when using public computers or networks?",
            answerOptions: [
                { answerText: "To reduce the risk of interception and unauthorized access.", isCorrect: true },
                { answerText: "Because public networks offer better security.", isCorrect: false },
                { answerText: "To easily share passwords.", isCorrect: false },
                { answerText: "To allow others to access your accounts.", isCorrect: false },
            ],
        },
        {
            questionText: "What is a passphrase?",
            answerOptions: [
                { answerText: "A short, easy-to-guess password.", isCorrect: false },
                { answerText: "A long password made up of random words.", isCorrect: true },
                { answerText: "A single word used as a password.", isCorrect: false },
                { answerText: "A password used for multiple accounts.", isCorrect: false },
            ],
        },
        {
            questionText: "What should you do if one of your passwords is exposed in a data breach?",
            answerOptions: [
                { answerText: "Continue using the same password.", isCorrect: false },
                { answerText: "Immediately change the compromised password.", isCorrect: true },
                { answerText: "Share the password with others.", isCorrect: false },
                { answerText: "Ignore the breach.", isCorrect: false },
            ],
        },
        {
            questionText: "How often should you change your passwords?",
            answerOptions: [
                { answerText: "Never.", isCorrect: false },
                { answerText: "Only when you forget them.", isCorrect: false },
                { answerText: "Periodically, especially if there are signs of compromise.", isCorrect: true },
                { answerText: "Whenever you feel like it.", isCorrect: false },
            ],
        },
    ];

    const handleAnswerOptionClick = (isCorrect, answerText) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        setAnswers([
            ...answers,
            {
                question: questions[currentQuestion].questionText,
                answer: answerText,
                correctAnswer: questions[currentQuestion].answerOptions.find((option) => option.isCorrect).answerText,
                isCorrect: isCorrect,
            },
        ]);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url${process.env.PUBLIC_URL}/(assets/quiz.jpg)` }}>
                <div className="banner-overlay"></div>
                <h1 className="banner-text">Quiz</h1>
            </div>
            <div style={styles.container}>
                {showScore ? (
                    <div style={styles.resultsSection}>
                        <div style={styles.scoreSection}>
                            You scored {score} out of {questions.length}
                        </div>
                        <div style={styles.answersSection}>
                            {answers.map((answer, index) => (
                                <div key={index} style={styles.answerReview}>
                                    <p><strong>Question {index + 1}:</strong> {answer.question}</p>
                                    <p>
                                        <strong>Your Answer:</strong> 
                                        <span style={{ color: answer.isCorrect ? 'green' : 'red' }}>
                                            {answer.answer} {answer.isCorrect ? "✔️" : "❌"}
                                        </span>
                                    </p>
                                    <p><strong>Correct Answer:</strong> {answer.correctAnswer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <div style={styles.questionSection}>
                            <div style={styles.questionCount}>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div style={styles.questionText}>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div style={styles.answerSection}>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
                                    style={styles.answerButton}
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '30px 70px 70px 70px',
    },
    questionSection: {
        marginBottom: '20px',
    },
    questionCount: {
        marginBottom: '10px',
    },
    questionText: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    answerSection: {
        display: 'flex',
        flexDirection: 'column',
    },
    answerButton: {
        padding: '10px 20px',
        margin: '5px 0',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    scoreSection: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    resultsSection: {
        textAlign: 'left',
    },
    answersSection: {
        fontSize: '18px',
    },
    answerReview: {
        marginBottom: '20px',
    },
};

export default Quiz;
