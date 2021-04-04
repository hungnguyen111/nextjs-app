export const changeFlag = () => {
    return dispatch => {
        dispatch({
            type: 'HANDLE_FLAG'
        })
    }
}
export const setFlagFalse = () => {
    return dispatch => {
        dispatch({
            type: 'SET_FLAG_FALSE'
        })
    }
}