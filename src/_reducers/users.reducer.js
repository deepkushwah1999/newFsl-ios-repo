import {
  userConstants
} from '../_constants';

export function users(state = {}, action) {

  switch (action.type) {


    case userConstants.GET_THEAM_SAVE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_THEAM_SAVE_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        // getLiveScoreByMatchId: action.users.getLiveScoreByMatchId,
        // matchItems: action.users.getLiveScoreByMatchId,
        // odds: action.users.getLiveScoreByMatchId.odds,
        // fancy: action.users.getLiveScoreByMatchId.fancy,
        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.GET_THEAM_SAVE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };






    case userConstants.GET_LIVE_SCORE_BY_MATCH_ID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_LIVE_SCORE_BY_MATCH_ID_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        // getLiveScoreByMatchId: action.users.getLiveScoreByMatchId,
        matchItems: action.users.getLiveScoreByMatchId,
        // odds: action.users.getLiveScoreByMatchId.odds,
        // fancy: action.users.getLiveScoreByMatchId.fancy,
        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.GET_LIVE_SCORE_BY_MATCH_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.SCORECARD_A_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SCORECARD_A_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        scoreCard: action.users.scoreCard,

        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.SCORECARD_A_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.FANCY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.FANCY_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        fancyList: action.users.scoreCard,





        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.FANCY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.MATCH_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.MATCH_INFO_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        matchInfo: action.users.matchInfo,
      };
    case userConstants.MATCH_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case userConstants.SQUAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SQUAD_SUCCESS:
      return {
        ...state,
        squad: action.users.squadByMatchId,
      };
    case userConstants.SQUAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.SeriesList_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SeriesList_DATA_SUCCESS:
      return {
        ...state,
        SeriesListData: action.users.SeriesListDATA,
      };
    case userConstants.SeriesList_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.pointsTable_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.pointsTable_DATA_SUCCESS:
      return {
        ...state,
        pointsTableData: action.users.pointsTableDATA,
      };
    case userConstants.pointsTable_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_ALL_VIDEO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_VIDEO_SUCCESS:
      return {
        ...state,
        getAllVideo: action.users.getAllVideo,
      };
    case userConstants.GET_ALL_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    //LOGIN
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        UserLoginEmailSuccess: true,
        UserLoginSuccess: false,
        UserLoginFailure: false,
        UserEmailToken: action.user.userinfoToken.token

      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        UserLoginFailure: true


      };

    //LOGIN OTP
    case userConstants.LOGIN_OTP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.LOGIN_OTP_SUCCESS:
      return {
        ...state,
        UserLoginSuccess: true,
        UserLoginEmailSuccess: false,
        UserLoginOTPFailure: false,
        // UserCurrentStage: action.user.userinfo.currentStage,
        token: action.user.userinfo.token
      };
    case userConstants.LOGIN_OTP_FAILURE:
      return {
        ...state,
        error: action.error,
        UserLoginOTPFailure: true
      };

    case userConstants.LOGOUT_OTP_SUCCESS:
      return {
        ...state,
        UserLoginSuccess: false,
        UserLoginEmailSuccess: false,
        UserLoginOTPFailure: false,
        UserCurrentStage: null,
        token: null
      };

    case userConstants.FILE_UPLOAD_STATUS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.FILE_UPLOAD_STATUS_SUCCESS:
      return {
        ...state,
        uploadProfileSuccess: true
      };
    case userConstants.FILE_UPLOAD_STATUS_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.GET_LIVE_SCORE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_LIVE_SCORE_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        getLiveScoreByMatchIdScoreData: action.users.getLiveScoreByMatchIdScoreData,
      };
    case userConstants.GET_LIVE_SCORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.GET_RANK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_RANK_SUCCESS:
      return {
        ...state,
        // isTicketCreated: false,
        // addUserSuccess: false,
        // loading: false,
        getRankData: action.users.getRankData,
        // getRankTotal: action.users.getRankData.total,
      };
    case userConstants.GET_RANK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };





    case userConstants.GET_TEAM_RANK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_TEAM_RANK_SUCCESS:
      return {
        ...state,
        // isTicketCreated: false,
        // addUserSuccess: false,
        // loading: false,
        getTeamRankData: action.users.getTeamRankData,
        // getRankTotal: action.users.getRankData.total,
      };
    case userConstants.GET_TEAM_RANK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };






    case userConstants.GET_ALL_ADS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_ADS_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        getAllAdsItems: action.users.getAllAds.data,
        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.GET_ALL_ADS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.GET_ALL_NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_NEWS_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        getAllNews: action.users.getAllNewsData,
        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.GET_ALL_NEWS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.GET_ALL_NEWS_DETAILS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_NEWS_DETAILS_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        allNewsDetails: action.users.getAllNewsDetails.data,
        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.GET_ALL_NEWS_DETAILS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.FINISHED_MATCH_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.FINISHED_MATCH_SCORE_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        recentdata: action.users.finishedMatchesScoreData,
        // finishedMatchesScoreTotal: action.users.finishedMatchesScoreData.total,
      };
    case userConstants.FINISHED_MATCH_SCORE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.HOME_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.HOME_SCORE_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        homeMatchesScore: action.users.homeMatchesScoreData,
        // homeMatchesScoreTotal: action.users.homeMatchesScoreData.total,
      };
    case userConstants.HOME_SCORE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.FIXTURES_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.FIXTURES_SCORE_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        fixturesScore: action.users.fixturesScoreData,
        // fixturesScoreTotal: action.users.fixturesScoreData.total,
      };
    case userConstants.FIXTURES_SCORE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case userConstants.UPCOMING_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.UPCOMING_SCORE_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        recentdata: action.users.upcomingMatchesScoreData,
        // upcomingMatchesScoreTotal: action.users.upcomingMatchesScoreData.total,
      };
    case userConstants.UPCOMING_SCORE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.LIVE_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.LIVE_SCORE_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        liveScore: action.users.liveScoreData,
        // liveScoreTotal: action.users.liveScoreData.total,
      };
    case userConstants.LIVE_SCORE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    case userConstants.HomeList_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.HomeList_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        HomeListData: action.users.HomeListData,
        // liveScoreTotal: action.users.liveScoreData.total,
      };
    case userConstants.HomeList_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };




    case userConstants.SeriesList_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SeriesList_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        SeriesListData: action.users.SeriesListData,
        // liveScoreTotal: action.users.liveScoreData.total,
      };
    case userConstants.SeriesList_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };






    case userConstants.LIVE2_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.LIVE2_SCORE_LIST_SUCCESS:
      return {
        ...state,
        isTicketCreated: false,
        addUserSuccess: false,
        loading: false,
        liveScoreresult: action.users.liveScoreData.result[0],
        // liveScoreTotal: action.users.liveScoreData.total,
      };
    case userConstants.LIVE2_SCORE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    case userConstants.SEND_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SEND_SUCCESS:
      return {
        ...state,
        sendCoinSuccess: true,
        sendCoinTXOTPSuccess: false,
      };
    case userConstants.SEND_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case userConstants.CLEAR_SEND_SUCCESS:
      return {
        ...state,
        sendCoinSuccess: false,
        sendCoinTXOTPSuccess: false,
      };


    case userConstants.SEND_OTP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.SEND_OTP_SUCCESS:
      return {
        ...state,
        sendCoinTXOTPSuccess: true,
      };
    case userConstants.SEND_OTP_FAILURE:
      return {
        ...state,
        sendCoinTXOTPSuccess: false,
        error: action.error
      };

    case userConstants.SEND_OTP_CLEAN:
      return {
        ...state,
        sendCoinSuccess: false,
        sendCoinTXOTPSuccess: false,
      };

    case userConstants.USER_TX_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userConstants.USER_TX_SUCCESS:
      return {
        ...state,
        getTxData: action.users.getTxData
      };
    case userConstants.USER_TX_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state
  }
}