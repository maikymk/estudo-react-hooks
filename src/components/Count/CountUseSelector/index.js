import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addAction, subAction, resetAction } from '../actionCreators';

const CountUseSelector = () => {
    const dispatch = useDispatch();

    // acesso a toda store em qualquer lugar
    const count = useSelector(
        state => state
        // () => true // função retornando true impede q seja rerenderizado
    );

    return (
        <div style={{ border: '2px solid grey', margin: '10px 0' }}>
            <h1>UseSelector</h1>

            <h2>CountUseSelector - {count.firstCount}</h2>

            <button type="button" onClick={() => dispatch(addAction(1))}>increment</button>
            <button type="button" onClick={() => dispatch(subAction(1))}>decrement</button>
            <button type="button" onClick={() => dispatch(resetAction())}>reset</button>
        </div>
    );
};

export default CountUseSelector;
