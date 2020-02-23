import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const incrementCount2 = () => {
        setCount2(count2 + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;

        while(i < 2000000000) i++;

        return count % 2 === 0;
    }, [count])

    return (
        <div>
            <button onClick={incrementCount}>count = {count}</button>
            {isEven ? 'par' : 'impar'}<br />

            <button onClick={incrementCount2}>count2 = {count2}</button>
        </div>
    )
}

export default UseMemo
