import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskOne from './components/TaskOne/TaskOne';
import TaskTwo from './components/TaskTwo/TaskTwo';
import { Provider } from 'react-redux';
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<App />} />
        <Route path='task1' element={<TaskOne />} />
        <Route path='task2' element={<TaskTwo />} />
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


