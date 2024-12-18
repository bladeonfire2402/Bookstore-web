import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import store from './redux/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <ToastContainer
   position="top-right"
   autoClose={5000}
 
   closeOnClick

   pauseOnFocusLoss

   pauseOnHover
   theme="light"

/>
{/* Same as */}
<ToastContainer />
   
   <Provider store={store}>
    <App />
   </Provider>
   </BrowserRouter>
    
  </React.StrictMode>
);



