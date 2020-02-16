import React, { useContext } from 'react'

import { CountContext } from '../../App';
import { addAction, subAction, resetAction } from '../Count/actionCreators';

export const ContextC = () => {
    const count = useContext(CountContext);

    return (
        <div style={{ border: '2px solid blue' }}>
            <h2>ContextC - {count.countValue.firstCount}</h2>

            <button type="button" onClick={() => count.dispatchCount(addAction(1))}>increment</button>
            <button type="button" onClick={() => count.dispatchCount(subAction(1))}>decrement</button>
            <button type="button" onClick={() => count.dispatchCount(resetAction())}>reset</button>
        </div>
    );
}

export const ContextB = () => {
    const count = useContext(CountContext);

    return (
        <div style={{ border: '2px solid green' }}>
            <h2>ContextB - {count.countValue.firstCount}</h2>

            <button type="button" onClick={() => count.dispatchCount(addAction(1))}>increment</button>
            <button type="button" onClick={() => count.dispatchCount(subAction(1))}>decrement</button>
            <button type="button" onClick={() => count.dispatchCount(resetAction())}>reset</button>

            <ContextC />
        </div>
    );
};

const Context = () => {
    const countContext = useContext(CountContext);

    return (
        <div style={{ border: '2px solid purple', margin: '10px 0', padding: 5 }}>
            <h2>ContextA - {countContext.countValue.firstCount}</h2>

            <button type="button" onClick={() => countContext.dispatchCount(addAction(1))}>increment</button>
            <button type="button" onClick={() => countContext.dispatchCount(subAction(1))}>decrement</button>
            <button type="button" onClick={() => countContext.dispatchCount(resetAction())}>reset</button>

            <ContextB />
        </div>
    );
};

export default Context
