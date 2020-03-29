import { useReducer } from 'react';

function TodoReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ];
        case 'delete':
            return state.filter(item => item.id !== action.payload);
        case 'complete':
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            });
        case 'reset':
            return action.payload;
        default:
            return state;
    }
}

export function useTodo() {
    return useReducer(TodoReducer, []);
}
