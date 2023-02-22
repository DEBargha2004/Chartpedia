import React from 'react'
import { ResponsiveLine } from '@nivo/line';
import linemapdata from '../../data/chartdata/linedata'

function Linechart() {
  return (
    <ResponsiveLine 
    data={linemapdata}
    margin={{top:120,bottom:120,left:60,right:100}}
    yFormat="-.2f"
    xScale={{type:'point'}}
    yScale={{
      type:'linear',
      max:"auto",
      min:"auto"
    }}
    useMesh={true}
    pointSize={15}
    pointColor='white'
    pointBorderWidth={3}
    pointBorderColor={{from:'serieColor'}}
    axisBottom={{
      legend:'Transportation',
      legendPosition:'middle',
      legendOffset:40,

    }}
    legends={[
      {
        anchor:'right',
        itemHeight:18,
        itemWidth:94,
        direction:'column',
        translateX:120,
        itemsSpacing:3,
        symbolShape:'circle',
        itemOpacity:0.8,
        effects:[
          {
            on:'hover',
            style:{
              itemOpacity:1,
              itemBackground:'rgba(60,60,60,0.1)'
            }
          }
        ]
      }
    ]}
    />
  )
}

export default Linechart;