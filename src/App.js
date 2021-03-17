import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
import AddQuestion from './pages/AddQuestion';
import Home from './pages/Home';
import Login from './pages/Login';
import Question from './pages/Question';
import Register from './pages/Register';
import { ToastContainer } from "react-toastify"


function App() {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/question/:id">
                    <Question />
                </Route>
                <Route path="/add-question">
                    <AddQuestion />
                </Route>
            </Switch>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
