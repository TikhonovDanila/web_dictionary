import { useState, useEffect } from 'react';
import axios from 'axios';
import MindMap from './MindMap';

const GraphPage = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                'https://tikhonovdanila.github.io/itmo_laboratory_work/2023_18dec/web_dictionary.json'
                );
                setGraphData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    if (!graphData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Семантический граф </h1>
            <MindMap graphData={graphData} />
        </div>
    );
};
export default GraphPage;
