import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import QandA from './components/QandA';
import Quiz from './components/Quiz';
import WhatsNew from './components/WhatsNew';
import KnowledgeCentre from './components/KnowledgeCentre';
import UsefulResources from './components/UsefulResources';
import BestPractice from './components/BestPractice';
import './styles/App.css';
import './styles/style.css';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/whats-new" element={<WhatsNew />} />
                    <Route path="/best-practice" element={<BestPractice />} />
                    <Route path="/knowledge-centre" element={<KnowledgeCentre />} />
                    <Route path="/q-and-a" element={<QandA />} />
                    <Route path="/useful-resources" element={<UsefulResources />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
