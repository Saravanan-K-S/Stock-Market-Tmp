import { useSelector } from "react-redux";
import { PortfolioItem } from "./PortfolioItem";

/**
 * Portfolio component displays the user's stock portfolio and calculates the net worth.
 * It uses Redux to fetch the portfolio data from the global state.
 */
export const Portfolio = () => {

  // Fetch the portfolio data from the Redux store
  const portfolio = useSelector(state => state.user.portfolio);

  /**
   * Calculates the total net worth of the portfolio.
   * It multiplies the quantity of each stock by its price and sums up the values.
   * @returns {string} The net worth of the portfolio, formatted to 2 decimal places.
   */
  const calculateNetworth = () => {
    return portfolio.reduce((acc, stock) => {
      return acc + (stock.quantity * stock.price);
    }, 0).toFixed(2);
  };

  return (
    <div className="flex-column gap-1">
      <h2>
        <span>Portfolio</span>
        { portfolio.length > 0 && <span> - Networth: {calculateNetworth()}</span> }
      </h2>

      <ul className="flex-column gap-1">
        {portfolio.map((stock) => (
          // Render each stock in the portfolio using the PortfolioItem component
          <PortfolioItem key={stock.id} stock={stock}>
          </PortfolioItem>
        ))}
      </ul>
    </div>
  );
};