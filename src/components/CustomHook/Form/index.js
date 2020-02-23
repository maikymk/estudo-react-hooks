import React from 'react'
import useInput from '../../../hooks/useInput';

function Form() {
    const [firstName, bindFirstName, resetName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');
    
    const handlerSubmit = (e) => {
        e.preventDefault();

        alert(`Hello ${firstName} ${lastName}`)

        resetName('');
        resetLastName('');
    };

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label>Nome</label>
                    <input {...bindFirstName} type="text" />
                </div>

                <div>
                    <label>Sobrenome</label>
                    <input {...bindLastName} type="text" />
                </div>

                <button type="submit">enviar</button>
            </form>
        </div>
    )
}

export default Form
