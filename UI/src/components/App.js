import { Navbar } from './Navbar';
import { Portfolio } from './Portfolio';
import { StockList } from './StockList';

/**
 * The main App component that serves as the root component for the Stock Market application.
 * It includes the Navbar, StockList, and Portfolio components arranged in a flexible layout.
 */
function App() {
  return (
    // Main container with a flex-column layout and a gap of 3 units between elements
    <div className="flex-column gap-3">
      {/* Navbar component at the top */}
      <Navbar />
      {/* Container for StockList and Portfolio components with a flex-row layout, 2 units gap, and wrapping enabled */}
      <div className="flex-row gap-2 flex-wrap">
        {/* StockList component with flexible growth and a minimum width of 300px */}
        <div className="flex-grow flex-basis-0" style={{"minWidth": "300px"}}>
          <StockList />
        </div>
        {/* Portfolio component with flexible growth and a minimum width of 300px */}
        <div className="flex-grow flex-basis-0" style={{"minWidth": "300px"}}>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;