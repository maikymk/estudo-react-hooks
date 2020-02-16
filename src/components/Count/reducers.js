export const INITIAL_STATE = {
    firstCount: 0
};

const count = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'ADD':
            return {
                ...state,
                firstCount: state.firstCount + payload
            }
        case 'SUB':
            return {
                ...state,
                firstCount: state.firstCount - payload
            }
        case 'RESET':
            return INITIAL_STATE
        default:
            return state
    }
};

export default count;
