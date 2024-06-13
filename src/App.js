import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/ProductsList';

function App() {
    return (
        <Router>
            <Routes> {/* Corrected typo here */}
                <Route exact path="/">
                    <ProductsList />
                </Route>
                {/* Add more routes for individual product pages if needed */}
            </Routes> {/* Corrected typo here */}
        </Router>
    );
}

export default App;
