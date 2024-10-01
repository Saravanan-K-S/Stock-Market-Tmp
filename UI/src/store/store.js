import { configureStore, createSlice } from "@reduxjs/toolkit";
import { STOCK_LIST } from "./data";

// Initial state of the store
const initialState = {
    stocks: STOCK_LIST, // List of available stocks
    user: {
        funds: 10000, // Initial funds available to the user
        portfolio: [] // User's stock portfolio
    }
}

// Create a slice for stocks with initial state and reducers
const stocksSlice = createSlice({
    name: 'stocks', // Name of the slice
    initialState: initialState, // Initial state
    reducers: {

        /**
         * Reducer to handle buying a stock from the market.
         * Assumes the quantity is always 1.
         * @param {Object} state - The current state of the store.
         * @param {Object} action - The action dispatched.
         * @param {Object} action.payload - The payload of the action.
         * @param {number} action.payload.id - The ID of the stock to buy.
         */
        buyStockFromMarket: (state, action) => {
            const stock = state.stocks.find(stock => stock.id === action.payload.id); // Find the stock by ID
            const funds = state.user.funds; // Get current funds
            const price = stock.price; // Get stock price

            if (funds >= price) { // Check if user has enough funds
                state.user.funds = funds - price; // Deduct the price from user's funds
                // Check if the stock is already in the portfolio
                if (state.user.portfolio.some(stock => stock.id === action.payload.id)) {
                    // Increase the quantity if stock is already in the portfolio
                    state.user.portfolio = state.user.portfolio.map(stock => {
                        if (stock.id === action.payload.id) {
                            return { ...stock, quantity: stock.quantity + 1 };
                        }
                        return stock;
                    });
                } else {
                    // Add the stock to the portfolio with quantity 1
                    state.user.portfolio.push({ ...stock, quantity: 1 });
                }
            } else {
                console.error('Insufficient funds'); // Log error if funds are insufficient
            }
        },

        /**
         * Reducer to handle selling a stock from the portfolio.
         * @param {Object} state - The current state of the store.
         * @param {Object} action - The action dispatched.
         * @param {Object} action.payload - The payload of the action.
         * @param {number} action.payload.id - The ID of the stock to sell.
         */
        sellStockFromPortfolio: (state, action) => {
            const stock = state.user.portfolio.find(stock => stock.id === action.payload.id); // Find the stock by ID in the portfolio
            const funds = state.user.funds; // Get current funds
            const price = stock.price; // Get stock price

            state.user.funds = funds + price; // Add the price to user's funds

            // Check if the stock quantity is more than 1
            if (stock.quantity > 1) {
                // Decrease the quantity if stock is already in the portfolio
                state.user.portfolio = state.user.portfolio.map(stock => {
                    if (stock.id === action.payload.id) {
                        return { ...stock, quantity: stock.quantity - 1 };
                    }
                    return stock;
                });
            } else {
                // Remove the stock from the portfolio if quantity is 1
                state.user.portfolio = state.user.portfolio.filter(stock => stock.id !== action.payload.id);
            }
        },
    }
});

// Configure the store with the stocks slice reducer
const store = configureStore({
    reducer: stocksSlice.reducer
});

// Export the actions to be used in components
export const { buyStockFromMarket, sellStockFromPortfolio } = stocksSlice.actions;

// Export the configured store
export default store;