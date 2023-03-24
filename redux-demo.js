const redux = require('redux');

const CounterReducer = (state = { counter: 0}, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            };

        case 'decrement':
            return {
                counter: state.counter - 1
            };

        default:
            return state;
    }
};


const store = redux.createStore(CounterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});
