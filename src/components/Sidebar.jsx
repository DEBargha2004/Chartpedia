import React, { useState } from 'react'
import Linkeditem from './Linkeditem';
import chartlist from '../data/chartlist';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <img src='https://cdn-icons-png.flaticon.com/64/1376/1376254.png'></img>
        <h1>Chartpedia</h1>
      </div>
      {chartlist.map((elem, index) => <Linkeditem id={elem.id} name={elem.name} key={index} index={index} active={index === activeIndex} setter={(index) => setActiveIndex(index)} />)}
    </div>
  )
}

export default Sidebar;