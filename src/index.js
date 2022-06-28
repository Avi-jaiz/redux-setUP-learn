import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './Reducers/Counter';
import allReducers from './Reducers';


// //STORE =>Global state

// //ACTION
// const increament =()=>
// {
//   return {
//     type:"INCREMENT"
//   }
// }

// const decrement =()=>
// {
//   return {
//     type:"DECREMENT"
//   }
// }
// //REDUCER

// const counter =(state=0,action)=>
// {
  
//   switch(action.type)
//   {
//      case 'INCREMENT':
//     return  state+1;

//       case 'DECREMENT':
//     return    state-1
//   }

// }

// let store = createStore(counter)

// store.subscribe(()=>console.log(store.getState()))
// //DISPATCH

// store.dispatch(increament())
// store.dispatch(decrement())



const store = createStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

