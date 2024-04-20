import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { groupHoldingsByAssetClass } from "./helpers/helper";

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

  const groupedHoldings = groupHoldingsByAssetClass(holdings);
  // console.log(groupedHoldings);

  return (
    <div className="p-8 bg-primary min-h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" bg-white rounded-md">
          {Object.keys(groupedHoldings).map((assetClass) => (
            <Card
              key={assetClass}
              asset={assetClass}
              data={groupedHoldings[assetClass]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
