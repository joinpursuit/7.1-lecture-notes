const DepositForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.nativeEvent.submitter.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" />
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
