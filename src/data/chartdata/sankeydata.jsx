const sankeydata = {
    "nodes": [
        {
            "id": "John",
            "nodeColor": "hsl(83, 70%, 50%)"
        },
        {
            "id": "Raoul",
            "nodeColor": "hsl(155, 70%, 50%)"
        },
        {
            "id": "Jane",
            "nodeColor": "hsl(159, 70%, 50%)"
        },
        {
            "id": "Marcel",
            "nodeColor": "hsl(109, 70%, 50%)"
        },
        {
            "id": "Ibrahim",
            "nodeColor": "hsl(170, 70%, 50%)"
        },
        {
            "id": "Junko",
            "nodeColor": "hsl(126, 70%, 50%)"
        }
    ],
    "links": [
        {
            "source": "Marcel",
            "target": "Ibrahim",
            "value": 180
        },
        {
            "source": "Raoul",
            "target": "Marcel",
            "value": 36
        },
        {
            "source": "Raoul",
            "target": "John",
            "value": 84
        },
        {
            "source": "Raoul",
            "target": "Junko",
            "value": 154
        },
        {
            "source": "John",
            "target": "Jane",
            "value": 148
        },
        {
            "source": "John",
            "target": "Ibrahim",
            "value": 167
        },
        {
            "source": "John",
            "target": "Marcel",
            "value": 57
        },
        {
            "source": "John",
            "target": "Junko",
            "value": 167
        },
        {
            "source": "Junko",
            "target": "Ibrahim",
            "value": 150
        },
        {
            "source": "Jane",
            "target": "Marcel",
            "value": 117
        }
    ]
}
export default sankeydata;