import React, { useState } from 'react';

const QandA = () => {
    const [questions, setQuestions] = useState([
        { question: "What is phishing?", answer: "Phishing is a type of social engineering attack where attackers impersonate a legitimate organization to steal sensitive information." },
    ]);

    const [newQuestion, setNewQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuestions([...questions, { question: newQuestion, answer: "Pending answer..." }]);
        setNewQuestion("");
    };

    return (
        <div id="qanda">
            <h2>Q&A Section</h2>
            <ul>
                {questions.map((q, index) => (
                    <li key={index}>
                        <strong>Q:</strong> {q.question}
                        <br />
                        <strong>A:</strong> {q.answer}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Ask a new question"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QandA;
