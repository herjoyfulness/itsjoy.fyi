import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home'
import { theme } from './components/shared/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Home />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;