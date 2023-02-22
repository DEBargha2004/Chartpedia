import React from 'react'
import { ResponsiveChord } from '@nivo/chord';
import chord_data from '../../data/chartdata/chorddata'

function Chordchart() {
  return (
    <ResponsiveChord 
      data={chord_data}
      keys={['Ajay','Malini','Suchi','Srikant','Tithi']}
      margin={{bottom:100,top:30}}
      valueFormat=".2f"
      innerRadiusRatio={0.97}
      innerRadiusOffset={0.02}
      inactiveRibbonOpacity={0.2}
      inactiveArcOpacity={0.2}
      padAngle={0.09}
      labelOffset={8}
      labelRotation={-90}
      labelTextColor={{
        from:'color',
        modifiers:[
          [
            'darker',
            2.6
          ]
        ]
      }}
      legends={[
        {
          anchor:'bottom',
          direction:'row',
          itemHeight:10,
          itemWidth:90,
          translateY:80,
          translateX:25,
          symbolShape:'circle',
          itemsSpacing:5,
          itemOpacity:0.85,
          effects:[
            {
              on:'hover',
              style:{
                itemOpacity:1
              }
            }
          ]
        }
      ]}
    />
  )
}

export default Chordchart;