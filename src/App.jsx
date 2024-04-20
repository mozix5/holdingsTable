import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [holdings, setHoldings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get(
          "https://canopy-frontend-task.now.sh/api/holdings"
        );
        setHoldings(response?.data.payload);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const groupHoldingsByAssetClass = (holdingsData) => {
    if (!holdingsData || !Array.isArray(holdingsData)) return {};

    const groupedHoldings = holdingsData.reduce((acc, holding) => {
      const { asset_class } = holding;
      if (!acc[asset_class]) {
        acc[asset_class] = [];
      }
      acc[asset_class].push(holding);
      return acc;
    }, {});

    return groupedHoldings;
  };

  const groupedHoldings = groupHoldingsByAssetClass(holdings);
  console.log(groupedHoldings);

  return (
    <div className="px-10">
      <h1>App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {Object.keys(groupedHoldings).map((assetClass) => (
            <Card key={assetClass} asset={assetClass} data={groupedHoldings[assetClass]} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
