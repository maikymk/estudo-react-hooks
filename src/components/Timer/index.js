import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    const tick = () => setTime(prevCount => prevCount + 1);

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {time}
        </div>
    )
}

export default Timer
