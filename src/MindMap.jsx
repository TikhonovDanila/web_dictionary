import React from 'react';
import Graph from 'react-graph-vis';

const MindMap = ({ graphData }) => {
    // Параметры конфигурации графа
    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            color: '#d98ed1',
            length: 200
        },
        nodes: {
            shape: 'box',
            font: {
                multi: 'html',
                size: 18
            },
            group: 'group',
            size: 30
        },
        groups: {
            1: { color: { background: '#f8efc1', border: 'black' } },
            2: { color: { background: '#f8bdb9', border: 'black' } }
        },

    };

    // События графа
    const events = {
        select: function (event) {
            console.log('Selected node:', event.nodes);
        },
    };

    return (
        <Graph
            graph={graphData}
            options={options}
            events={events}
            style={{ height: '800px'}}
        />
    );
};

export default MindMap;
