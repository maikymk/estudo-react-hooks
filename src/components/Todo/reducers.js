const INITIAL_STATE = {
    todo: [
        1,
        2
    ]
};

const todoReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case 'ADD_TODO':
            return {
                state,
                todo: [
                    ...state.todo,
                    payload
                ]
            };
        default:
            return state;
    }
};

export default todoReducer;
