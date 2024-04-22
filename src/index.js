import React from "react";
import * as ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import apps from "./challenges";
import NoPage from "./pages/NoPage";
import './index.css';
const App = () => {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {apps.map((app, index) => (
                        <Route key={index} path={app.path} element={<app.component/>} />
                    ))}
                      <Route path="*" element={<NoPage />} />
                </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);