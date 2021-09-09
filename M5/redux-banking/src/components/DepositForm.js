import { deposit, withdrawal } from "../actions/balanceActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const DepositForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.nativeEvent.submitter.name === "deposit") {
      // if we hit the deposit button, dispatch a deposit action
      dispatch(deposit(amount));
    } else {
      // else, dispatch a withdrawal action
      dispatch(withdrawal(amount));
    }

    console.log();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={handleChange} />
      <button type="submit" name="deposit">
        Deposit
      </button>
      <button type="submit" name="withdrawal">
        Withdrawal
      </button>
    </form>
  );
};

export default DepositForm;
