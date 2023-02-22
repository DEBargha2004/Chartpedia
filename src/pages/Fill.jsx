import React from 'react'
import { Routes,Route } from 'react-router-dom';
import chartlist from '../data/chartlist';
import RouteItem from '../components/RouteItem';
import Home from './Home';

function Fill() {
  return (
    <div className='fill'>
      <Routes>
        <Route path="" element={<Home/>} />
        {chartlist.map(RouteItem)}
      </Routes>
    </div>
  )
}

export default Fill;