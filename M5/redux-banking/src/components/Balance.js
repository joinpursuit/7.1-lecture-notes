import "./Balance.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => {
    return state.balance;
  });

  console.log(balance);
  return <div className="Balance">${balance}</div>;
};

export default Balance;
