import { StockListItem } from './StockListItem';
import { useSelector } from 'react-redux';

/**
 * StockList component
 * This component is responsible for rendering a list of stocks.
 * It uses the `useSelector` hook to access the stocks from the Redux store.
 */
export const StockList = () => {

  // Retrieve the list of stocks from the Redux store
  const stocks = useSelector(state => state.stocks);

  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {/* Iterate over the stocks and render a StockListItem for each stock */}
        {stocks.map((stock) => (
          <StockListItem key={stock.id} stock={stock}>
          </StockListItem>
        ))}
      </ul>
    </div>
  );
};