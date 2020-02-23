import React, { memo } from 'react'

const Title = ({ text }) => {
    console.log('title');

    return <h1>{text}</h1>
};

export default memo(Title);
