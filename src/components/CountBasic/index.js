import React, { useState, useEffect } from 'react';

const CountBasic = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `count ${count}`
    }, [count]);

    const moreFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div>
            <button type="button" onClick={() => setCount(0)}>reset</button>
            <button type="button" onClick={() => setCount(prevValue => prevValue + 1)}>mais</button>
            <button type="button" onClick={() => setCount(prevValue => prevValue - 1)}>menos</button>
            <button type="button" onClick={moreFive}>mais 5</button>

            <h5>{count}</h5>
        </div>
    );
};

export default CountBasic;