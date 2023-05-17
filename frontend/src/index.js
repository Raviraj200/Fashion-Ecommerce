import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { position, transitions,Provider as AlertProvider, positions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
const root=ReactDOM.createRoot(document.getElementById('root'));

const options ={
  timeout :2000,
  position:positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
}
root.render(
  <Provider store={store}>
   <AlertProvider template={AlertTemplate} {...Option}>
   <App />
   </AlertProvider>
  </Provider>
);