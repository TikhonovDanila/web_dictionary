// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GraphPage from './GraphPage';
import TermListPage from './TermListPage';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <h2>Тихонов Данила, группа Р4210</h2>
                        <li>
                            <Link to="/">Семантический граф</Link>
                        </li>

                        <li>
                            <Link to="/term-list">Глоссарий</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<GraphPage />} />
                    <Route path="/term-list" element={<TermListPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
