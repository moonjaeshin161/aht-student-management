export const AccountsReducer = (state, action) => {
    switch(action.type) {
        case "GET_ACCOUNTS" :
            return {...state , state: action.payload };
        default :
            return state;
    }
}