import { useEffect, useState } from 'react';
import Card from './Card'; // Import the Card component

const CampaignList = () => {
    const [data, setData] = useState([]);

    // Fetch data from your API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/campaigns'); // Update with your actual API endpoint
                const result = await response.json();
                setData(result);
                // console.log(result);
                // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Campaigns</h1>
            <Card data={data} />
        </div>
    );
};

export default CampaignList;
