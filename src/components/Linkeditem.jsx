import React from 'react'
import { Link } from 'react-router-dom';

function Linkeditem(props) {
  return (
    <Link to={props.id} className="linked-div">
      <div className={`linkeditem ${props.active ? 'activated' : ''}`} onClick={()=>props.setter(props.index)}>
        <p>{props.name}</p>
      </div>
    </Link>
  )
}

export default Linkeditem;