let userDetl = {
    name: "",
    email: ""
}

const userAuthReducer = (state = userDetl, action) => {
    switch (action.type) {
        case "USER_AUTHENTICATED": {
            let newState = Object.assign({},action.payLoad);
            return newState;
        }
        break;
        default:
            return state;
        break
    }
}


export default userAuthReducer;