import React, { memo } from 'react'

const Button = ({ onClick, children }) => {
    console.log('button - ', children);

    return (
        <button onClick={onClick}>{children}</button>
    );
};

export default memo(Button);
