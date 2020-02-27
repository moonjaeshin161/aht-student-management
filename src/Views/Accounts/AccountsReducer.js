export const AccountsReducer = (state, action) => {
    switch(action.type) {
        case "GET_ACCOUNTS" :
            return state.concat(action.payload) 
        default :
            return state;
    }
}