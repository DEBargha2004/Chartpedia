import React from 'react'
import { ResponsiveBump } from '@nivo/bump';
import bumpdata from '../../data/chartdata/bumpdata'

function Bumpchart(props) {
  let data = props.data['/bump'] ? JSON.parse(props.data['/bump']) : bumpdata
  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: 'nivo' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -36
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'ranking',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      margin={{ top: 80, right: 100, bottom: 80, left: 60 }}
      axisRight={null}
    />
  )
}

export default Bumpchart;


