
let initialState = {
    flag: true
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_FLAG':
            state.flag = !state.flag;
            return {...state}
        case 'SET_FLAG_FALSE':
            state.flag = true;
            return {...state}
        default:
            return { ...state }
    }
};

export default pageReducer;