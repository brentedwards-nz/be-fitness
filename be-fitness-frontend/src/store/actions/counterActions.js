const counterActions = {
  INCREMENT: "COUNTER.INCREMENT",
  DECREMENT: "COUNTER.DECREMENT",
};

export const getActions = (dispatch) => {
  return {
    increment: (amount) => dispatch(increment(amount)),
    decrement: (amount) => dispatch(decrement(amount)),
  };
};

export const increment = (amount) => {
  return {
    type: counterActions.INCREMENT,
    amount,
  };
};

export const decrement = (amount) => {
  return {
    type: counterActions.DECREMENT,
    amount
  };
};

export default counterActions;