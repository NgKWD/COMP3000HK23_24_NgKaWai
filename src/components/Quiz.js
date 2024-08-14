import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
            question: "What is a strong password?",
            options: ["123456", "password", "A complex mix of letters, numbers, and symbols"],
            answer: "A complex mix of letters, numbers, and symbols"
        },
        {
            question: "What is phishing?",
            options: ["A type of fish", "A cybersecurity attack", "A programming language"],
            answer: "A cybersecurity attack"
        },
        {
            question: "What does 2FA stand for?",
            options: ["Two-Factor Authentication", "Two-Faced Application", "Two-Factor Analysis"],
            answer: "Two-Factor Authentication"
        },
        {
            question: "Which one of these is an example of malware?",
            options: ["Microsoft Word", "Windows Defender", "Ransomware"],
            answer: "Ransomware"
        },
        {
            question: "What is a firewall?",
            options: ["A physical wall that protects your network", "A software that blocks unauthorized access", "A virus"],
            answer: "A software that blocks unauthorized access"
        },
        {
            question: "What does VPN stand for?",
            options: ["Virtual Private Network", "Very Private Network", "Verified Private Node"],
            answer: "Virtual Private Network"
        },
        {
            question: "What is encryption?",
            options: ["A method to decode messages", "A method to encode messages", "A method to duplicate messages"],
            answer: "A method to encode messages"
        },
        {
            question: "Which of the following is a safe browsing practice?",
            options: ["Clicking on pop-up ads", "Using HTTPS websites", "Sharing passwords with friends"],
            answer: "Using HTTPS websites"
        },
        {
            question: "What is social engineering?",
            options: ["A type of engineering discipline", "A technique used by cybercriminals to manipulate people", "A software development methodology"],
            answer: "A technique used by cybercriminals to manipulate people"
        },
        {
            question: "Why is it important to update your software regularly?",
            options: ["To get new features", "To stay protected against vulnerabilities", "Both"],
            answer: "Both"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleAnswer = (option) => {
        const nextQuestion = currentQuestion + 1;
        const isCorrect = option === questions[currentQuestion].answer;
        const newScore = isCorrect ? score + 1 : score;
        
        setUserAnswers([...userAnswers, { 
            question: questions[currentQuestion].question, 
            selectedAnswer: option, 
            correctAnswer: questions[currentQuestion].answer,
            isCorrect: isCorrect
        }]);
        setScore(newScore);

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div id="quiz">
            <h2>Cybersecurity Quiz</h2>
            {showScore ? (
                <div>
                    <h3>Your Score: {score} / {questions.length}</h3>
                    <h4>Review Your Answers:</h4>
                    <ul>
                        {userAnswers.map((answer, index) => (
                            <li key={index}>
                                <strong>Question:</strong> {answer.question}
                                <br />
                                <strong>Your Answer:</strong> {answer.selectedAnswer} 
                                {answer.isCorrect ? (
                                    <span style={{ color: 'green', marginLeft: '10px' }}>&#10004;</span>  // Checkmark symbol
                                ) : (
                                    <span style={{ color: 'red', marginLeft: '10px' }}>&#10008;</span>  // Crossmark symbol
                                )}
                                <br />
                                <strong>Correct Answer:</strong> {answer.correctAnswer}
                                <br /><br />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;
