export const INITIAL_STATE = {
    loading: true,
    post: {},
    error: ''
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: payload,
                error: ''
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: payload
            };
        default:
            return state;
    }
}

export default reducer;
