import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Application
import App from './App.jsx';

// Css
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Fragment>
)