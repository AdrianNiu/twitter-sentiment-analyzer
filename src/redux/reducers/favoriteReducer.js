const favoriteReducer = (state = [], action) => {
    console.log('in favoriteReducer', action.type);
    switch (action.type) {
        case 'FAVES':
            return action.payload
        default:
            return state
    }
}

export default favoriteReducer;