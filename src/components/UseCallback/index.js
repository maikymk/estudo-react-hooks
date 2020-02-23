import React, { useState, useCallback } from 'react'

import Title from './Title';
import Text from './Text';
import Button from './Button';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    const handleCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const handleCount2 = useCallback(() => {
        setCount2(count2 + 10);
    }, [count2]);

    return (
        <div>
            <Title text="Título" />

            <Text>{count}</Text>
            <Button onClick={handleCount}>Increment count</Button>

            <Text>{count2}</Text>
            <Button onClick={handleCount2}>Increment count2</Button>
        </div>
    )
}

export default UseCallback;
