import React from 'react'
import { ResponsiveFunnel } from '@nivo/funnel';
import funneldata from '../../data/chartdata/funneldata';

function Funnelchart(props) {
  let data = props.data['/funnel'] ? JSON.parse(props.data['/funnel']) : funneldata
  return (
    <ResponsiveFunnel 
    data={data}
    margin={{top:100,bottom:100}}
    borderWidth={16}
    shapeBlending={0.9}
    valueFormat="-.4s"
    currentPartSizeExtension={20}
    currentBorderWidth={30}
    motionConfig="wobbly"
    labelColor={{
      from:'color',
      modifiers:[
        [
          'darker',
          '5'
        ]
      ]
    }}
    beforeSeparatorLength={100}
    afterSeparatorLength={100}
    beforeSeparatorOffset={30}
    afterSeparatorOffset={30}
    />
  )
}

export default Funnelchart;

