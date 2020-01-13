// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      // console.log(action.id);
      return state.filter((expense) => {
        return action.id !== expense.id 
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            //this takes everything from the original expense object
            ...action.updates
            //and this adds on properties which then override the original ones
          }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
};