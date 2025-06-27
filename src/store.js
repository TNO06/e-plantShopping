// Importing Necessary Functions and Files:
// The configureStore() function from Redux Toolkit is used to create the Redux store.
import { configureStore } from '@reduxjs/toolkit';
// The cartReducer from the CartSlice.jsx file manages the cart slice of the Redux state.
import cartReducer from './CartSlice';

// Create a Redux store using configureStore from Redux Toolkit
const store = configureStore({
  // Define the root reducer object
  reducer: {
    // 'cart' is the name of the slice in the store, and it's managed by cartReducer
    cart: cartReducer,
  },
});

// Exporting the Store:
// The configured Redux store is exported so it can be used in the app (e.g., in <Provider store={store}>)
export default store;
