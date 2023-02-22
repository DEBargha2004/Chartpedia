import React,{ useState } from 'react'
import Sidebar from './components/Sidebar';
import Main from './components/Main'

function App() {
  return (
    <div className='body-container'>
        <Sidebar />
        <Main />
    </div>
  )
}

export default App;
