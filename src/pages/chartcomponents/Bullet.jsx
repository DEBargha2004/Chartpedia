import React from 'react'
import { ResponsiveBullet } from '@nivo/bullet';
import bulletdata from '../../data/chartdata/bulletdata'

function Bulletchart() {
  return (
    <ResponsiveBullet
      data={bulletdata}
      margin={{ top: 50, right: 120, bottom: 50, left: 120 }}
      spacing={60}
      titleAlign="start"
      titleOffsetX={-50}
      measureSize={0.2}
    />
  )
}

export default Bulletchart;