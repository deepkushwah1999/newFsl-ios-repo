




import {
    userConstants
} from '../_constants';


const initialState = {
    matches: "Recent",
    // primary: "darkred",
    // secondary: "#f5f5f5",
    // thirdback:  "#FFF"

}

export function matches(state = initialState, action) {

    switch (action.type) {
        case userConstants.SET_MATCH:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state
    }
}