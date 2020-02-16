export const success = (payload) => ({
    type: 'FETCH_SUCCESS',
    payload
});

export const error = (payload) => ({
    type: 'FETCH_ERROR',
    payload
});
