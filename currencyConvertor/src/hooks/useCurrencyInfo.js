import { useEffect, useState } from "react";
// custom
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates)); // Updated to reflect the structure of the new API
  }, [currency]);

  useEffect(() => {
    console.log(data); // Log after data is updated
  }, [data]);

  return data;
}
export default useCurrencyInfo;
