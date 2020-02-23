import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [timer, setTimer] = useState(0);

    const inputRef = useRef('');
    const timerRef = useRef(0);

    useEffect(() => {
        console.log('state')
    });

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" /><br />

            timer {timer}

            <button onClick={() => clearInterval(timerRef.current)}>stop timer</button>
        </div>
    )
}

export default UseRef
