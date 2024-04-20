import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { fetchHoldings, groupHoldingsByAssetClass } from "./helpers/helper";

const App = () => {
  const [holdings, setHoldings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    fetchHoldings(setHoldings,setLoading);
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
