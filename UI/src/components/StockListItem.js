import { useDispatch } from "react-redux";
import { buyStockFromMarket } from "../store/store";

/**
 * StockListItem component represents a single stock item in a list.
 * It displays the stock's name, price, and provides a button to buy the stock.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.stock - The stock object containing id, name, and price.
 * @returns {JSX.Element} The JSX element representing a stock list item.
 */
export const StockListItem = ({ stock }) => {

  // Initialize the dispatch function from Redux to dispatch actions.
  const dispatch = useDispatch();

  /**
   * handleBuy function dispatches an action to buy the stock from the market.
   * It uses the stock's id to identify which stock to buy.
   */
  const handleBuy = () => {
    dispatch(buyStockFromMarket({ id: stock.id }));
  }

  return (
    <li className="stock-list-item" key={stock.id}>
      {/* Display the stock's name */}
      <div className="stock-name">{stock.name}</div>
      {/* Display the stock's price formatted to 2 decimal places */}
      <div>${stock.price.toFixed(2)}</div>
      {/* Button to buy the stock, triggers handleBuy on click */}
      <button className="buy-button" onClick={handleBuy}>Buy</button>
    </li>
  );
}