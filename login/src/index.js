import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter  as Router, Route } from 'react-router-dom';
import App from "./App";
import Login from  './container/Login';
import UserDetl from  './container/UserDetl';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import mainreducer from "./reducer";
import setAuthorization from "./setAuthorization";


setAuthorization(localStorage.getItem("jwttoken"));

let mainstore = createStore(mainreducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider  store={mainstore}   >
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={UserDetl} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));