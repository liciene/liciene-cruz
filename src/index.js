import React from 'react';

import ReactDOM from 'react-dom/client';
import {BrowserRouter as Routes} from 'react-router-dom';

import './index.css';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <MyHeader/>
      <MyRoutes/>
      <MyFooter/>
    </Routes>
  </React.StrictMode>
);

