import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCoins } from "../redux/coin/coinThunks";

const ViewCoins = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data); // Adjust the path as necessary

  useEffect(() => {
    dispatch(allCoins());
  }, [dispatch]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-white">All Crypto Assests</h1>
      <div className="overflow-x-auto">
        <table className="w-[80vw] mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Symbol
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Current Price
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Market Cap
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                24h High
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                24h Low
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Total Volume
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Circulating Supply
              </th>
              <th className="py-2 px-3 border-b border-gray-600 bg-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
            
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((coin) => (
              <tr key={coin.id} className="hover:bg-gray-600">
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  {coin.name}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  {coin.symbol.toUpperCase()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  ${coin.market_cap.toLocaleString()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  ${coin.high_24h.toLocaleString()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  ${coin.low_24h.toLocaleString()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  ${coin.total_volume.toLocaleString()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  {coin.circulating_supply.toLocaleString()}
                </td>
                <td className="py-2 px-3 border-b border-gray-600 text-gray-200 text-xs">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCoins;
