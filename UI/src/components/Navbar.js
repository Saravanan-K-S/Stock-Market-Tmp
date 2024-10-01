import { useSelector } from "react-redux";

/**
 * Navbar component for displaying the application title and user's current balance.
 * Utilizes Redux to fetch the user's funds from the global state.
 */
export const Navbar = () => {

  // Retrieve the user's funds from the Redux store
  const funds = useSelector(state => state.user.funds);

  return (
    <nav className="flex-row flex-space-between">
      {/* Application title */}
      <h1 style={{ fontWeight: 'bold' }}>Stock Market</h1>
      {/* Display the user's current balance, formatted to 2 decimal places */}
      <h1>Balance: {funds.toFixed(2)}</h1>
    </nav>
  );
};