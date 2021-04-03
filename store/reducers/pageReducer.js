
let initialState = {
    flag: true
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_FLAG':
            // debugger
            state.flag = !state.flag
            return {...state}
        default:
            return { ...state }
    }
};

export default pageReducer;