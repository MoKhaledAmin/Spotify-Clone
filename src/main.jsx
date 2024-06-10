import React from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Application
import App from './App.jsx';

// Context
import PlayerContextProvider from './context/PlayerContext.jsx';

// Css
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <BrowserRouter>
            <PlayerContextProvider>
                <App />
            </PlayerContextProvider>
        </BrowserRouter>
    </React.Fragment>
);