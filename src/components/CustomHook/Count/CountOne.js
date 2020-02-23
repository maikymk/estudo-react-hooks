import React from 'react';

import useCount from '../../../hooks/useCount';

const CountOne = () => {
    const [count, increment, decrement, reset] = useCount();

    return (
        <div>
            <button type="button" onClick={increment}>mais</button>
            <button type="button" onClick={decrement}>menos</button>
            <button type="button" onClick={reset}>reset</button>

            <h5>{count}</h5>
        </div>
    );
};

export default CountOne;
