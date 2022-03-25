import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ProductList from './components/ProductList';

//for Toast alert
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ProductList />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
