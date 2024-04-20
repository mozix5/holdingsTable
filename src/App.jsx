import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [holdings, setHoldings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get('https://canopy-frontend-task.now.sh/api/holdings');
        setHoldings(response.data); // Assuming API returns JSON data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchHoldings();
  }, []); // Empty dependency array to run effect only once on component mount
console.log(holdings);
  return (
    <div className='bg-red-500'>
      <h1>App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {holdings ? (
            <div>
              <h2>Holdings</h2>
              <pre>{JSON.stringify(holdings, null, 2)}</pre>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
