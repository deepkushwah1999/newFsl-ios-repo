import { userConstants } from '../_constants';
// import { userService } from '../_services';
// import { dashboardActions } from './dashboard.actions';
// import { alertActions } from './alert.actions';
// import AsyncStorage from '@react-native-community/async-storage';

export const matchesActions = {
    setTheme
};




function setTheme(data) {
    // console.log('getRankgetRankgetRankgetRank  action');
    return dispatch => {
        dispatch(success(data));
    };
    function success(users) {
        return { type: userConstants.SET_MATCH, users };
    }
}










