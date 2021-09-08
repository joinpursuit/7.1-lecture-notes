import { DEPOSIT, WITHDRAWAL } from "../actions/actionTypes";

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case DEPOSIT:
    case WITHDRAWAL:
    default:
      return state;
  }
};

export default balanceReducer;
