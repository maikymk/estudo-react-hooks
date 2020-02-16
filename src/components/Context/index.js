import React, { useContext } from 'react'

import { UserContext, AgeContext } from '../../App';

export const ContextC = () => (
    <div style={{ border: '2px solid blue' }}>
        <h2>UseContext Consumer</h2>
        <UserContext.Consumer>
            {
                user => (
                    <AgeContext.Consumer>
                        {
                            age => (
                                <p>User: {user} -- Age: {age}</p>
                            )
                        }
                    </AgeContext.Consumer>
                )
            }
        </UserContext.Consumer>
    </div>
)

export const ContextHookC = () => {
    const user = useContext(UserContext);
    const age = useContext(AgeContext);

    return (
        <div style={{ border: '2px solid green' }}>
            <h2>UseContext hook</h2>

            <p>User: {user} -- Age: {age}</p>
        </div>
    )
}

export const ContextB = () => (
    <>
        <ContextC />
        <ContextHookC />
    </>
)

const Context = () => (
    <div style={{ border: '2px solid red', padding: 5 }}>
        <h1>Context</h1>

        <ContextB />
    </div>
)

export default Context
