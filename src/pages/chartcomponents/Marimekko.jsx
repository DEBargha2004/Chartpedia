import React from 'react'
import { ResponsiveMarimekko } from '@nivo/marimekko';
import marimekkodata from '../../data/chartdata/marimekkodata'

function Marimekkochart() {
  return (
    <ResponsiveMarimekko
    data={marimekkodata}
    id="statement"
    value="participation"
    margin={{bottom:100,top:100,left:50,right:50}}
    dimensions={[
      {
        id:'Agree strongly',
        value:'stronglyAgree'
      },{
        id:'Agree',
        value:'agree'
      },
      {
        id:'Disagree',
        value:'disagree'
      },
      {
        id:'Disagree Strongly',
        value:'stronglyDisagree'
      }
    ]}
    innerPadding={20}
    defs={[
      {
        id:'agreelines',
        type:'patternLines',
        background:'rgba(0,0,0,0)',
        color:'rgb(211, 67, 0)',
        rotation:-45,
        spacing:10,
        lineWidth:4
      },
      {
        id:'disagreelines',
        type:'patternLines',
        background:'rgba(0,0,0,0)',
        color:'rgb(255, 137, 3)',
        rotation:-45,
        spacing:10,
        lineWidth:4
      }
    ]}
    fill={[
      {
        match:{
          id:'Agree strongly'
        },
        id:'agreelines'
      },
      {
        match:{
          id:'Disagree Strongly'
        },
        id:'disagreelines'
      }
    ]}
    colors={{scheme:'spectral'}}
    borderWidth={1}
    borderColor={{
      from:'color',
      modifiers:[
        [
          'darker',
          0.3
        ]
      ]
    }}
    axisBottom={{
      legend:'participation',
      legendPosition:'middle',
      legendOffset:40,
      tickSize:8
    }}
    axisLeft={{
      legend:'Opinions',
      legendPosition:'middle',
      legendOffset:-40,
      tickSize:7
    }}
    legends={[
      {
        anchor:'bottom',
        direction:'row',
        itemHeight:18,
        itemWidth:140,
        translateY:80,
        itemsSpacing:8,
        itemOpacity:0.85,
        symbolSize:18,
        effects:[
          {
            on : 'hover',
            style:{
              itemOpacity:1,
              itemBackground:'rgba(100,100,100,0.1)'
            }
          }
        ]
      }
    ]}
    />
  )
}

export default Marimekkochart;