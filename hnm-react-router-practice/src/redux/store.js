import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import productReducer from "./reducers/productReducer"

let store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)))

// let store = createStore(productReducer, applyMiddleware(thunk))

export default store;