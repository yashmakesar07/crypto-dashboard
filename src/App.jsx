import { useDispatch, useSelector } from "react-redux";
import { coinList } from "./redux/coin/coinThunks";
const App = () => {
  const dispatch = useDispatch();

  // Access specific properties from the Redux state
  const data = useSelector((state) => state.data);

  // Function to dispatch the thunk action to fetch coins
  const handleFetchCoins = () => {
    dispatch(coinList());
    console.log(data);
  };

  return (
    <div>
      <h1>App</h1>
      <button
        onClick={handleFetchCoins}
        className="p-5 text-white bg-slate-800 hover:bg-slate-700"
      >
        Fetch Coins
      </button>

      {/* Conditionally render data if it exists */}
      {data && (
        <ul>
          {data.map((cur, index) => (
            <li key={index}>{cur}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
