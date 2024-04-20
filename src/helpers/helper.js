import axios from "axios";

export const fetchHoldings = async (setHoldings,setLoading) => {
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

export const groupHoldingsByAssetClass = (holdingsData) => {
    if (!holdingsData || !Array.isArray(holdingsData)) return {};
    const groupedHoldings = Object.groupBy(
      holdingsData,
      ({ asset_class }) => asset_class
    );

    return groupedHoldings;
  };
