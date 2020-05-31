import React, { useState, useContext } from 'react';
import TodoContext from '../TodoContext';

export function AddTodoForm() {
    const [input, setInput] = useState('');
    const dispatch = useContext(TodoContext);

    const submitForm = e => {
        e.preventDefault();
        dispatch({ type: 'add', payload: input });
        setInput('');
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" value={input} autoFocus required onChange={e => setInput(e.target.value)} />
            <button>Add todo</button>
        </form>
    );
}
