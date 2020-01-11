import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    notes = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    //same as description: description
    notes,
    amount,
    createdAt
  }
});




//REMOVE_EXPENSE

const removeExpense = (
  {
    id: id
  }  = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});
//EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

//SET_TEXT_FILTER

const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
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

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};


// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
  expenses: [{
    id: 'asolfkajs',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount,
    startDate: undefined,
    endDate: undefined
  }
};

const person = {
  name: 'Jen',
  age: 24
};

console.log ({
  ...person,
  location: 'Canada',
  age: 27
});