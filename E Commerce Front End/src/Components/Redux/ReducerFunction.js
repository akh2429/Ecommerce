
const initialState = {
    User: {}

};
function Reducer(state = initialState, action) {
    switch (action.type) {
        case "add_user":
            return {
                ...state,
                User: { ...state.User, ...action.payload }
            }
        default:
            return state
    }

}
export default Reducer;