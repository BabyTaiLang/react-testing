import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import reducer from './redux/reducer';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCP5dHhAR6qHiIJS2KH3eMm3ZBQXcX0LeY",
  authDomain: "react-test-e8abc.firebaseapp.com",
  projectId: "react-test-e8abc",
  storageBucket: "react-test-e8abc.appspot.com",
  messagingSenderId: "263925395692",
  appId: "1:263925395692:web:803f01a7fe7dca5a75b5c9"
};

initializeApp(firebaseConfig);

const store = createStore(combineReducers({reducer:reducer}));

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
