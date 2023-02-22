import React from 'react'
import { ResponsiveVoronoi } from '@nivo/voronoi';
import voronoidata from '../../data/chartdata/voronoidata'

function Voronoichart() {
  return (
    <ResponsiveVoronoi
    data={voronoidata}
    xDomain={[ 0, 100 ]}
    yDomain={[ 0, 100 ]}
    enableLinks={true}
    linkLineColor="#cccccc"
    cellLineColor="#c6432d"
    pointSize={6}
    pointColor="#c6432d"
    margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
/>
  )
}

export default Voronoichart;