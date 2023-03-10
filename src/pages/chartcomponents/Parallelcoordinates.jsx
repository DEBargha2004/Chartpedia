import React from 'react'
import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates';
import parallelcoordinatesdata from '../../data/chartdata/parallelcoordinatesdata';

function Parallelcoordinateschart(props) {
    let data = props.data['/parallel-coordinates'] ? JSON.parse(props.data['/parallel-coordinates']) : parallelcoordinatesdata
  return (
    <ResponsiveParallelCoordinates
        data={data}
        variables={[
            {
                key: 'temp',
                type: 'linear',
                min: 'auto',
                max: 'auto',
                ticksPosition: 'before',
                legend: 'temperature',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'cost',
                type: 'linear',
                min: 0,
                max: 'auto',
                ticksPosition: 'before',
                legend: 'cost',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'color',
                type: 'point',
                padding: 1,
                values: [
                    'red',
                    'yellow',
                    'green'
                ],
                legend: 'color',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'target',
                type: 'point',
                padding: 0,
                values: [
                    'A',
                    'B',
                    'C',
                    'D',
                    'E'
                ],
                legend: 'target',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'volume',
                type: 'linear',
                min: 0,
                max: 'auto',
                legend: 'volume',
                legendPosition: 'start',
                legendOffset: -20
            }
        ]}
        margin={{ top: 100, right: 90, bottom: 100, left: 90 }}
        colours={{scheme:'orange_red'}}
    />
  )
}

export default Parallelcoordinateschart;

