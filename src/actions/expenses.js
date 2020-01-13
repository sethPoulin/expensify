import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = (
  {
    id: id
  }  = {}
) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});