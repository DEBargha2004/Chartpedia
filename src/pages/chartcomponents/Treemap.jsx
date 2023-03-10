import React from 'react'
import { ResponsiveTreeMap } from '@nivo/treemap';
import treemapdata from '../../data/chartdata/treemapdata'

function Treemapchart(props) {
  let data = props.data['/tree-map'] ? JSON.parse(props.data['/tree-map']) : treemapdata
  return (
    <ResponsiveTreeMap
      data={data}
      identity="name"
      value="loc"
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.2
          ]
        ]
      }}
      parentLabelPosition="left"
      parentLabelTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            2
          ]
        ]
      }}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.1
          ]
        ]
      }}
    />
  )
}

export default Treemapchart;

