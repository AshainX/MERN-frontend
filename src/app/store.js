import { configureStore } from "@reduxjs/toolkit";
/* A friendly abstraction over the standard Redux createStore function that adds good defaults to the 
store setup for a better development experience.
 */
import { apiSlice } from "./api/apiSlice";
/* When you call createApi, it automatically generates and 
returns an API service "slice" object structure containing 
Redux logic you can use to interact with the endpoints you defined. 
This slice object includes a reducer to manage cached data, a middleware to manage cache lifetimes and subscriptions, and selectors and thunks 
for each endpoint. If you imported createApi from the React-specific entry point, it also includes 
auto-generated React hooks for use in your components.
 */
export const store = configureStore({
    reducer: {                                    
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true

})

/* In redux, the reducers are the pure functions that contain the logic and calculation that needed to be 
performed on the state. These functions accept the initial state of the state being used and the action 
type. It updates the state and responds with the new state */