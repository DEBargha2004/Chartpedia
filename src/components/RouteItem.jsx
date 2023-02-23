import React from 'react'
import { Route } from 'react-router-dom'
import Reusablechartcomponent from './Reusablechartcomponent';

function RouteItem(props) {
  return (
    <Route path={props.id} element={<Reusablechartcomponent name={props.name} id={props.id} chartComponent={props.element} note={props.note} />} />
  )
}

export default RouteItem;