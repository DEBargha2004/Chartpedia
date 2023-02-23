import React from 'react'
import { ResponsiveSankey } from '@nivo/sankey';
import sankeydata from '../../data/chartdata/sankeydata'

function Sankeychart(props) {
    let data = props.data['/sankey'] ? JSON.parse(props.data['/sankey']) : sankeydata
    return (
        <ResponsiveSankey
            data={data}
            margin={{ top: 80, right: 150, bottom: 40, left: 0 }}
            align="justify"
            colors={{ scheme: 'category10' }}
            nodeOpacity={1}
            nodeHoverOthersOpacity={0.35}
            nodeThickness={18}
            nodeSpacing={24}
            nodeBorderWidth={0}
            nodeBorderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.8
                    ]
                ]
            }}
            nodeBorderRadius={3}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            linkContract={3}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="vertical"
            labelPadding={16}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1
                    ]
                ]
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 130,
                    itemWidth: 100,
                    itemHeight: 14,
                    itemDirection: 'right-to-left',
                    itemsSpacing: 2,
                    itemTextColor: '#999',
                    symbolSize: 14,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default Sankeychart;

