import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [positions, setPositions] = useState({});

    const handlePositions = (e) => setPositions({
        x: e.clientX,
        y: e.clientY
    });

    useEffect(() => {
        console.log('mount event');
        window.addEventListener('mousemove', handlePositions);

        return () => {
            console.log('unmount event');
            window.removeEventListener('mousemove', handlePositions);
        };
    }, []);

    return <h5>{`x: ${positions.x} -- y: ${positions.y}`}</h5>;
};

export default Todo;
