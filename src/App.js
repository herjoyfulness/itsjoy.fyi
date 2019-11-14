import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/shared/theme';
import Home from './pages/Home'

theme.breakpoints.s = theme.breakpoints[0];
theme.breakpoints.m = theme.breakpoints[1];
theme.breakpoints.l = theme.breakpoints[2];

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