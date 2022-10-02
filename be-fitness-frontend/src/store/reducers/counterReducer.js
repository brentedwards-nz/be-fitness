import counterActions from '../actions/counterActions';

const initState = {
  counterObject: {
    value: 0,
    incrementAmount: 0,
    actions: []
  }
};

const reducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        ...state,
        counterObject: {
          value: state.counterObject.value + Number(action.amount),
          incrementAmount: Number(action.amount),
          actions: [...state.counterObject.actions, "Add " + action.amount]
        }
      };
    case counterActions.DECREMENT:
      return {
        ...state,
        counterObject: {
          value: state.counterObject.value - Number(action.amount),
          incrementAmount: -Number(action.amount),
          actions: [...state.counterObject.actions, "Subtract " + action.amount]
        }
      };
    default:
      return state;
  }
};

export default reducer;