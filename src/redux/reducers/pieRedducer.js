const pieReducer = (state = [], action) => {
    console.log('in pieReducer', action.payload);
    switch (action.type) {
        case 'PIES':
            return action.payload
        default:
            return state
    }
}

export default pieReducer;