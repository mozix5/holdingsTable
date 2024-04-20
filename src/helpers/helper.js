export const groupHoldingsByAssetClass = (holdingsData) => {
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