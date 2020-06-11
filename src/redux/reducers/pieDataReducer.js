const pieDataReducer = (state = [], action) => {
    console.log('in pieDataReducer!!!', action.payload);
    switch (action.type) {
        case 'PIE_DATA':
            return action.payload
        default:
            return state
    }
}

export default pieDataReducer;