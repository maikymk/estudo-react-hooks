import React, { useReducer } from 'react';

import { addAction, subAction, resetAction } from '../actionCreators';
import reducers, { INITIAL_STATE } from '../reducers';

const CountUseReducer = () => {
    // acesso a um reducer definido
    const [count, dispatch] = useReducer(reducers, INITIAL_STATE)
    const [count2, dispatch2] = useReducer(reducers, INITIAL_STATE)

    return (
        <div style={{ border: '2px solid black', margin: '10px 0', padding: 5 }}>
            <h1>UseReducer</h1>

            <div style={{ border: '2px solid cyan' }}>
                <h2>CountUseReducer1 - {count.firstCount}</h2>

                <button type="button" onClick={() => dispatch(addAction(1))}>increment</button>
                <button type="button" onClick={() => dispatch(subAction(1))}>decrement</button>
                <button type="button" onClick={() => dispatch(resetAction())}>reset</button>
            </div>

            <div style={{ border: '2px solid orange' }}>
                <h2>CountUseReducer2 - {count2.firstCount}</h2>

                <button type="button" onClick={() => dispatch2(addAction(1))}>increment</button>
                <button type="button" onClick={() => dispatch2(subAction(1))}>decrement</button>
                <button type="button" onClick={() => dispatch2(resetAction())}>reset</button>
            </div>
        </div>
    );
};

export default CountUseReducer;
