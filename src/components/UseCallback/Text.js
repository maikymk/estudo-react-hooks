import React, { memo } from 'react'

const Text = ({ children }) => {
    console.log('text - ', children);

    return <h3>{children}</h3>;
}

export default memo(Text);
