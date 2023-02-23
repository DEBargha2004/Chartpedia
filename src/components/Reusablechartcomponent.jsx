import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChartData from '../data/chartdata'

const getItem = () => {
  let array_item = JSON.parse(localStorage.getItem('userfiledata'))
  if (array_item) {
    return array_item
  } else {
    return {}
  }
}
function Reusablechartcomponent(props) {
  const location = useLocation()
  const [userfiledata, setUserFileData] = useState(getItem)
  const [toShow, setToShow] = useState('chart')
  function handleChange(e) {
    let file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onloadend = () => setUserFileData({
      ...userfiledata,
      [location.pathname]: reader.result
    })
  }
  useEffect(() => {
    localStorage.setItem('userfiledata', JSON.stringify(userfiledata))
  }, [userfiledata])
  return (
    <div className="reusablechart-component">
      <div className="reusable-header">
        <p>{props.name} Chart</p>
      </div>
      <div className="reusablechart">
        <div className="chart-buttons">
          <button className="chart-button" onClick={() => setToShow('chart')}>Chart</button>
          <button className="chart-button" onClick={() => setToShow('data')}>Data</button>
        </div>
        <div className="child-chart-component">{toShow === 'chart' ? React.cloneElement(props.chartComponent, { data: userfiledata, type: props.id }) : <ChartData data={userfiledata[location.pathname]} id={location.pathname.slice(1)} />}</div>
        <div className="data-input">
          <input type="file" id="data" style={{ display: 'none' }} onChange={handleChange}></input>
          <label htmlFor="data" className="data-label">
            <span><img src="https://cdn-icons-png.flaticon.com/24/3097/3097412.png"></img></span>
          </label>
        </div>
      </div>
      <div className="note">{props.note}</div>
    </div>
  );
}

export default Reusablechartcomponent;
