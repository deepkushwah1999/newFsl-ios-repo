import { CONST } from '../_config';
import { store } from '../_helpers/store';
import axios from 'axios';
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    //console.log("responseresponseresponse  ", response.data.message);
    if (response.data.error) {
        const error = (response.data.error && response.data.message) || response.statusText;
        return Promise.reject(error);
    }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export const dashboardService = {
    // getClientProfile,
    // addAddress,
    // logout,
    // getAddress,
    // updatepassword,
    // createTicket,
    // getTicketList,
    // createMessage,
    // getMessagesByTicketId,
    // getUserInfo,
    // updateUserInfo,
    // getPriceHistory,
};
async function logout() {

}
