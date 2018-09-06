import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//actions
export const INCREMENT = "INCREMENT";
export const INCREMENT_AMOUNT = "INCREMENT_AMOUNT";
export const DECREMENT = "DECREMENT";
export const ZERO = "ZERO";

//Nao precisa de payload (parametro)
export const increment = () => {
  return {
    type: INCREMENT
  }
}

//Precisa de payload (parametro)
export const increment_amount = (amount) => {
  return {
    type: INCREMENT_AMOUNT,
    amount
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const zero = () => {
  return {
    type: ZERO
  }
}


//reducers
const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case INCREMENT_AMOUNT:
      return state + action.amount
    case DECREMENT:
      return state - 1
    case ZERO:
      return 0
    case counter:
      break;
    default: 
      return state;
  }
}


const reducers = combineReducers({
  counter
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store
