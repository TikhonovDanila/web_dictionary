import { useState, useEffect } from 'react';
import axios from 'axios';

const TermListPage = () => {
    const [termList, setTermList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                'https://tikhonovdanila.github.io/itmo_laboratory_work/2023_18dec/web_dictionary.json');
                setTermList(response.data.nodes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Список веб-терминов</h1>
            <ul>
                {termList.map((term) => (
                    <li key={term.id}>{term.label} - {term.desc}</li>
                ))}
            </ul>
        </div>
    );
};
export default TermListPage;