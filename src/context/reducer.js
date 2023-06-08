export const actionType = {
    SET_USER: "SET_USER",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_COLLECTION: "SET_COLLECTION",
    SET_ALL_COLLECTION: "SET_ALL_COLLECTION"

}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            }

        case actionType.SET_ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers
            }
        case actionType.SET_COLLECTION:
            return {
                ...state,
                allUsers: action.collection
            }
            case actionType.SET_ALL_COLLECTION:
            return {
                ...state,
                allUsers: action.allCollection
            }
        default:
            return state;
    }
};

export default reducer;