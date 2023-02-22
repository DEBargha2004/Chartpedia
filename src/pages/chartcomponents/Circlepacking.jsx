import React from 'react'
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import circlepacking_data from '../../data/chartdata/circlepackingdata'

function Circlepackingchart() {
  return (
    <ResponsiveCirclePacking
      data={circlepacking_data}
      id="name"
      value="loc"
      margin={{ bottom: 70, top: 50 }}
      padding={5}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            '.5'
          ]
        ]
      }}
      defs={[
        {
          id:'lines',
          type:'patternLines',
          background:'inherit',
          color:'rgba(255,255,255,0.4)',
          rotation:-45,
          lineWidth:4,
          spacing:9
        }
      ]}
      fill={[
        {
          match:{
            depth:1
          },
          id:'lines'
        }
      ]}
      enableLabels={true}
      labelsSkipRadius={5}
      labelsFilter={function(n){return 3 === n.node.depth}}
      labelTextColor={{
        from:'color',
        modifiers:[
          [
            'darker',
            '1.6'
          ]
        ]
      }}
    />
  )
}

export default Circlepackingchart;