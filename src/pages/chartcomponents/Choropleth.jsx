import React,{useEffect} from 'react'
import { ResponsiveChoropleth } from '@nivo/geo';
import choropleth_features from '../../data/features'
import choroplethdata from '../../data/chartdata/choroplethdata'

function Choroplethchart(props) {
  let data = props.data['/choropleth'] ? JSON.parse(props.data['/choropleth']) : choroplethdata
  useEffect(()=>{
  })
  return (
    <ResponsiveChoropleth
      data={data}
      features={choropleth_features.features}
      domain={[0, 1000000]}
      colors="nivo"
      valueFormat=".3s"
      borderWidth={0.2}
      enableGraticule={true}
      graticuleLineColor="rgb(200, 200, 200)"
      defs={[
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(0,0,0,0.3)',
          rotation: -45,
          spacing: 5,
          lineWidth: 1.5
        }
      ]}
      fill={[
        {
          match: {
            id: 'CAN'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'CHN'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor:'left',
          direction:'column',
          translateY:50,
          translateX:0,
          justify:true,
          itemHeight:23,
          itemWidth:90,
          itemOpacity:0.8,
          itemDirection:'left-to-right',
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

export default Choroplethchart;

