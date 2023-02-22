import React from 'react'
import { ResponsiveTimeRange } from '@nivo/calendar';
import timerangedata from '../../data/chartdata/timerangedata'

function Timerangechart() {
  return (
    <ResponsiveTimeRange
        data={timerangedata}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 90, right: 40, bottom: 0, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
                translateX: -60,
                translateY: -150,
                symbolSize: 20
            }
        ]}
    />
  )
}

export default Timerangechart;