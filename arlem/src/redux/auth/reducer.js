const initialState = {
    isLoggedIn :'false'
    
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN': return {
            ...state,
            isLoggedIn :'true'
        }

        default : return state
    }
}

export default authReducer;