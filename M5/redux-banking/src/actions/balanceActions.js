import { DEPOSIT, WITHDRAWAL } from "./actionTypes";

export const deposit = (amount) => ({ type: DEPOSIT, amount });
export const withrawal = (amount) => ({ type: WITHDRAWAL, amount });
