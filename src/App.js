import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import List from './List.js';
import View from './View.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={List} />
                    <Route exact path="/view/:pokemonId" component={View} />
                </div>
            </Router>
        );
    }
}

export default App;
