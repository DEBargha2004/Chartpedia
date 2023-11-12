import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump';
import areabumpdata from '../../data/chartdata/areabumpdata'


function Areabumpchart(props) {
  let data = props.data['/areabump'] ? JSON.parse(props.data['/areabump']) : areabumpdata
  return (
    <ResponsiveAreaBump 
      data={data}
      blendMode="multiply"
      margin={{left:70,right:70,top:80,bottom:80}}
      startLabel="id"
      defs={[
        {
          id:'lines',
          type:'patternLines',
          background:'inherit',
          color:'rgba(0,0,0,0.1)',
          rotation:-45,
          lineWidth:8,
          spacing:15
        },
        {
          id:'dots',
          type:'patternDots',
          background:'inherit',
          color:'rgba(138, 117, 0, 0.3)',
          padding:3,
          size:6,
          stagger:true
        }
      ]}
      fill={
        [
          {
            match:{
              id:'JavaScript'
            },
            id:'lines'
          },
          {
            match:{
              id:'TypeScript'
            },
            id:'dots'
          }
        ]
      }
    />
  )
}

export default Areabumpchart;

