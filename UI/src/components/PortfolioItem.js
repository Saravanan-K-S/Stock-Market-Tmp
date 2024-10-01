import { useDispatch } from "react-redux";
import { sellStockFromPortfolio } from "../store/store";

/**
 * PortfolioItem component represents a single stock item in the user's portfolio.
 * It displays the stock name, quantity, total value, and provides a button to sell the stock.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.stock - The stock object containing details about the stock.
 * @param {string} props.stock.id - The unique identifier for the stock.
 * @param {string} props.stock.name - The name of the stock.
 * @param {number} props.stock.quantity - The quantity of the stock owned.
 * @param {number} props.stock.price - The current price of the stock.
 */
export const PortfolioItem = ({ stock }) => {
  // Initialize the dispatch function from Redux to dispatch actions
  const dispatch = useDispatch();

  /**
   * handleSell function dispatches an action to sell the stock from the portfolio.
   * It uses the stock's id to identify which stock to sell.
   */
  const handleSell = () => {   
    dispatch(sellStockFromPortfolio({ id: stock.id }));
  };

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="flex-row gap-0-5 stock-name">
        {/* Display the stock name and quantity */}
        <span>{stock.name}</span>
        <span>( {stock.quantity} )</span>
      </div>
      {/* Display the total value of the stock (quantity * price) */}
      <div>{ (stock.quantity * stock.price).toFixed(2) }</div>
      {/* Button to sell the stock, triggers handleSell on click */}
      <button className="sell-button" onClick={handleSell}>Sell</button>
    </li>
  );
};