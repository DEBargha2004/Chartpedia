import React from 'react'
import { ResponsiveSunburst } from '@nivo/sunburst';
import sunburstdata from '../../data/chartdata/sunburstdata'

function Sunburstchart() {
  return (
    <ResponsiveSunburst
      data={sunburstdata}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="loc"
      cornerRadius={4}
      borderColor={{ theme: 'background' }}
      colors={{ scheme: 'nivo' }}
      childColor={{
        from: 'color',
        modifiers: [
          [
            'brighter',
            0.1
          ]
        ]
      }}
      enableArcLabels={true}
      arcLabelsRadiusOffset={0.6}
      arcLabelsSkipAngle={9}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.4
          ]
        ]
      }}
    />
  )
}

export default Sunburstchart;