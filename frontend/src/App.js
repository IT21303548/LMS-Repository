import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Welcome to LMS</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
