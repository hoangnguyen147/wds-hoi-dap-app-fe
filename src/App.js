import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
import Login from './features/Login'
import Questions from './features/Question';

function App() {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/questions" />
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/questions">
                    <Questions />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
