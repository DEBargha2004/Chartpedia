import areabumpdata from './chartdata/areabumpdata'
import bardata from './chartdata/bardata'
import bulletdata from './chartdata/bulletdata'
import bumpdata from './chartdata/bumpdata'
import calendardata from './chartdata/calendardata'
import chorddata from './chartdata/chorddata'
import choroplethdata from './chartdata/choroplethdata'
import circlepackingdata from './chartdata/circlepackingdata'
import funneldata from './chartdata/funneldata'
import heatmapdata from './chartdata/heatmapdata'
import linedata from './chartdata/linedata'
import marimekkodata from './chartdata/marimekkodata'
import networkdata from './chartdata/networkdata'
import parallelcoordinatesdata from './chartdata/parallelcoordinatesdata'
import piedata from './chartdata/piedata'
import radardata from './chartdata/radardata'
import radialbardata from './chartdata/radialbardata'
import sankeydata from './chartdata/sankeydata'
import scatterplotdata from './chartdata/scatterplotdata'
import streamdata from './chartdata/streamdata'
import sunburstdata from './chartdata/sunburstdata'
import swarmplotdata from './chartdata/swarmplotdata'
import timerangedata from './chartdata/timerangedata'
import treemapdata from './chartdata/treemapdata'
import voronoidata from './chartdata/voronoidata'
import waffledata from './chartdata/waffledata'


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const defaultdata = {
    areabump: areabumpdata,
    bar: bardata,
    bullet: bulletdata,
    bump: bumpdata,
    calendar: calendardata,
    chord: chorddata,
    choropleth: choroplethdata,
    circlepacking: circlepackingdata,
    funnel: funneldata,
    heatmap: heatmapdata,
    line: linedata,
    marimekko: marimekkodata,
    network: networkdata,
    parallelcoordinates: parallelcoordinatesdata,
    pie: piedata,
    radar: radardata,
    radialbar: radialbardata,
    sankey: sankeydata,
    scatterplot: scatterplotdata,
    stream: streamdata,
    sunburst: sunburstdata,
    swarmplot: swarmplotdata,
    timerange: timerangedata,
    treemap: treemapdata,
    voronoi: voronoidata,
    waffle: waffledata
}

function ChartData(props) {
    let data = props.data ? JSON.parse(props.data) : defaultdata[props.id]
    return (
        <>
            <SyntaxHighlighter language='javascript' style={materialOceanic}>
                {JSON.stringify(data, null, 2)}
            </SyntaxHighlighter>
        </>
    )
}
export default ChartData;