import React from 'react';
import style from './App.module.scss'
import Button from './components/Button';

function App() {
  return (
    <div className={style.container}>
     <Button title='задание 1' path='task1' />
     <Button title='задание 2' path='task2' />
    </div>
  )
}

export default App;
