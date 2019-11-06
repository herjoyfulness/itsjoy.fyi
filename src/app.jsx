import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home'
import { theme } from './components/shared/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Home />  
            </Router>
        </ThemeProvider>
    );
  }
  
  export default App;