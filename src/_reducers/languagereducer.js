




import {
    userConstants
} from '../_constants';


const initialState = {
    theme: "en",
    Change_Theame: "Change Theame",
 

}

export function leng(state = initialState, action) {

    switch (action.type) {
        case userConstants.SET_LANG:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state
    }
}