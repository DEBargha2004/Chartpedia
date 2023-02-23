import React from 'react'
import { ResponsiveBar } from '@nivo/bar';
import bardata from '../../data/chartdata/bardata'



function Barchart(props) {
  let data = props.data['/bar'] ? JSON.parse(props.data['/bar']) : bardata
  return (
    <ResponsiveBar 
      data={data}
      keys={[
        'hot dog',
        'burger',
        'sandwich',
        'kebab',
        'fries',
        'donut'
      ]}
      indexBy='country'
      margin={{left:100,right:150,bottom:50,top:100}}
      padding={0.3}
      defs={[
        {
          id : 'dots',
          type : 'patternDots',
          background : 'inherit',
          color : 'rgba(0,0,0,0.2)',
          size : 3,
          padding : 3,
          stagger : true
        },
        {
          id:'lines',
          type:'patternLines',
          background:'inherit',
          color:'rgba(78,95,95,0.2)',
          rotation:-45,
          lineWidth:4,
          spacing:8
        }
      ]}
      fill = {[
        {
          match : {
            id : 'hot dog'
          },
          id : 'dots'
        },
        {
          match:{
            id : 'fries'
          },
          id:'lines'
        }
      ]}
      legends={[{
        dataFrom:'keys',
        anchor : 'bottom-right',
        direction : 'column',
        itemHeight:22,
        itemWidth:50,
        translateX:70,
        itemOpacity:0.88,
        effects:[
          {
            on:'hover',
            style:{
              itemOpacity:1
            }
          }
        ]
      }]}
      axisBottom={{
        legend:'Country',
        legendPosition:'middle',
        legendOffset:40,
        tickSize:6
      }}
      axisLeft={{
        legend:'Food',
        legendOffset:-50,
        legendPosition:'middle'
      }}
    />
  )
}

export default Barchart;

