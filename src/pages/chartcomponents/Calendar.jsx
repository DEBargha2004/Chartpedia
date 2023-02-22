import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar';
import calendardata from '../../data/chartdata/calendardata';

function Calendarchart() {
  return (
    <ResponsiveCalendar 
      data = {calendardata}
      from="2015-01-01"
      to="2018-08-11"
      colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
      margin={{left:20,right:20,top:30,bottom:10}}
      yearSpacing={30}
      dayBorderWidth={2}
      monthBorderColor="#ffffff"
      dayBorderColor='#ffffff'
      emptyColor='#eeeeee'
      daySpacing={1}
    />
  )
}

export default Calendarchart;