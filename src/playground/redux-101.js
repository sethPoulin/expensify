import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  //if the object provided doesn't include the incrementBy property, give incrementBy a value of 1.  If no object is passed in, use an empty object as a default.  Then the destructuring still tries to happen - we try to destructure the incrementBy property.  If it doesn't exist (which it surely won't in an object with NO properties), use the default value of 1.
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ setTo }) => ({ 
  type: 'SET',
  setTo
})

//REDUCERS
//1. Reducers are pure functions (output is solely determined by input, e.g.
// let a=10;
// const add = (b) => {
// return a + b
//})
// ^^^This is not a pure function because the output is not determined solely by the input (b).  The output depends on what the outside variable a is set to.
//2. Never change state or action.  They mutate state by returning a different state object.

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.setTo
      };
    default: {
      return state;
    };
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ setTo: 101 }));


