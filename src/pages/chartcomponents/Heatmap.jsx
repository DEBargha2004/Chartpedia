import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap';
import heatmapdata from '../../data/chartdata/heatmapdata'

function Heatmapchart() {
  return (
    <ResponsiveHeatMap 
    data={heatmapdata}
    margin={{top:100,bottom:100,left:100,right:100}}
    emptyColor="#ffffff"
    valueFormat="-0.3s"
    colors={{
      type:"diverging",
      minValue:-100000,
      maxValue:100000,
      divergeAt:0.7
    }}
    labelTextColor={{
      from:'color',
      modifiers:[
        [
          'darker',
          '7'
        ]
      ]
    }}
    axisRight={{
      legend:'Country',
      legendPosition:'middle',
      legendOffset:80
    }}
    axisLeft={{
      legend:'Country',
      legendPosition:'middle',
      legendOffset:-80
    }}
    legends={[
      {
        anchor:'bottom',
        direction:'row',
        title:'value',
        translateY:60,
        length:400,
        tickFormat:'-0.3s',
        thickness:20
      }
    ]}
    />
  )
}

export default Heatmapchart;