//Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  //note the second argument is the filters object, from which we destructure text, sortBy, etc.
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    // const textMatch = true;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
    // console.log(expense.description.toLowerCase());
    // console.log('rent'.includes('rent'));

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    };
    if (sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1
    };
  });
};