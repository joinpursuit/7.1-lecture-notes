import { DEPOSIT, WITHDRAWAL } from "../actions/actionTypes";

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.amount;
    case WITHDRAWAL:
      return state - action.amount;
    default:
      return state;
  }
};

export default balanceReducer;
