import React, { useState } from 'react'
import useDocumentTitle from '../../../hooks/useDocumentTitle';

function Title1() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count++ {count}</button>
        </div>
    )
}

function Title2() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count++ {count}</button>
        </div>
    )
}

function DocumentTitle() {
    return (
        <div>
            <Title1 />
            <Title2 />
        </div>
    )
}

export default DocumentTitle
