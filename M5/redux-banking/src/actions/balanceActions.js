import { DEPOSIT, WITHDRAWAL } from "./actionTypes";

export const deposit = (amount) => ({ type: DEPOSIT, amount });
export const withdrawal = (amount) => ({
  type: WITHDRAWAL,
  amount,
});
