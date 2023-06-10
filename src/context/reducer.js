export const actionType = {
    SET_USER: "SET_USER",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_COLLECTION: "SET_COLLECTION",
    SET_ALL_COLLECTION: "SET_ALL_COLLECTION",
    SET_DOC: "SET_DOC"

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
                collection: action.collection
            }
        case actionType.SET_ALL_COLLECTION:
            return {
                ...state,
                allCollection: action.allCollection
            }
        case actionType.SET_DOC:
            return {
                ...state,
                doc: action.doc
            }
        default:
            return state;
    }
};

export default reducer;