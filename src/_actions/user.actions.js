import { userConstants } from '../_constants';
import { userService } from '../_services';
import { dashboardActions } from './dashboard.actions';
import { alertActions } from './alert.actions';
import AsyncStorage from '@react-native-community/async-storage';

export const userActions = {
  // getTransactions,
  // navigationSave,
  // clearSendTx,
  // forgotPassword,
  // register,
  // sendFromWithOTP,
  // sendOtpTX,
  // userlogin,
  // logout,
  // validateOtp,
  // uploadProfile,
  Livescore,
  Livescore2,
  fixtures,
  homeMatches,
  upcomingMatches,
  finishedMatches,
  getLiveScoreByMatchId,
  getRank,
  getAllNews,
  newsDetail,
  getScoreAPI,
  matchInfo,
  squadByMatchId,
  getFancyAPI,
  getAllAds,
  teamRanking,
  HomeList,
  SeriesList,
  SeriesListDATA,
  pointsTableDATA,
  getAllVideo,
  updateLiveScoreFromSocket,
  createTicket
};


  function createTicket(obj) {
  return dispatch => {
    dispatch(success(obj));
    async function success(obj) {

      try {
        // console.log('====================================');
        // console.log("userdatt::::::::",obj);
        // console.log('====================================');
        // let users=obj.data

        // await AsyncStorage.setItem('TheamColor',users);
     
      } catch (error) {
        console.log("sdasjdsd", error);
      }
      
      
      return { type: userConstants.GET_THEAM_SAVE_SUCCESS, users };
    }
  }
}





function teamRanking(data) {
  // console.log('getRankgetRankgetRankgetRank  action');
  return dispatch => {
    dispatch(request());
    userService.teamRanking(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_TEAM_RANK_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_TEAM_RANK_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_TEAM_RANK_FAILURE, error };
  }
}

function getAllVideo(data) {

  return dispatch => {
    dispatch(request());
    userService.getAllVideo(data)
      .then(
        users => {
          // console.log("squads+++++++++++++++++++", users);
          dispatch(success(users));
        },
        error => {

          dispatch(failure(error));
        }
      );
  };
  function request() { return { type: userConstants.GET_ALL_VIDEO_REQUEST } }
  function success(users) { return { type: userConstants.GET_ALL_VIDEO_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GET_ALL_VIDEO_FAILURE } }


}








function getRank(data) {
  // console.log('getRankgetRankgetRankgetRank  action');
  return dispatch => {
    dispatch(request());
    userService.getRank(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_RANK_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_RANK_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_RANK_FAILURE, error };
  }
}

function getLiveScoreByMatchId(data) {
  return dispatch => {
    dispatch(request());
    userService.getLiveScoreByMatchId(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_LIVE_SCORE_BY_MATCH_ID_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_LIVE_SCORE_BY_MATCH_ID_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_LIVE_SCORE_BY_MATCH_ID_FAILURE, error };
  }
}

function updateLiveScoreFromSocket(users) {
  return dispatch => {
    dispatch(success(users));
    function success(users) {
      // console.log("ACTIION SCOKET DATA:::::::users",users)
      return { type: userConstants.GET_LIVE_SCORE_BY_MATCH_ID_SUCCESS, users };
    }
  }
}

function matchInfo(data) {
  return dispatch => {
    dispatch(request());
    userService.matchInfo(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.MATCH_INFO_REQUEST };
  }
  function success(users) {
    return { type: userConstants.MATCH_INFO_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.MATCH_INFO_FAILURE, error };
  }
}
function squadByMatchId(data) {
  return dispatch => {
    dispatch(request());
    userService.squadByMatchId(data).then(
      users => {
        //console.log('squads+++++++++++++++++++', users);
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.SQUAD_REQUEST };
  }
  function success(users) {
    return { type: userConstants.SQUAD_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.SQUAD_FAILURE, error };
  }
}

function SeriesListDATA(data) {
  return dispatch => {
    dispatch(request());
    userService.SeriesListDATA(data).then(
      users => {
        //  console.log('squads+++++++++++++++++++', users);
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.SeriesList_DATA_REQUEST };
  }
  function success(users) {
    return { type: userConstants.SeriesList_DATA_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.SeriesList_DATA_FAILURE, error };
  }
}

function pointsTableDATA(data) {
  return dispatch => {
    dispatch(request());
    userService.pointsTableDATA(data).then(
      users => {
        //  console.log('squads+++++++++++++++++++', users);
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.pointsTable_DATA_REQUEST };
  }
  function success(users) {
    return { type: userConstants.pointsTable_DATA_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.pointsTable_DATA_FAILURE, error };
  }
}

function getScoreAPI(data) {
  // console.log('ACTION _____score::::', data);
  return dispatch => {
    dispatch(request());
    userService.getScoreAPI(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.SCORECARD_A_REQUEST };
  }
  function success(users) {
    return { type: userConstants.SCORECARD_A_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.SCORECARD_A_FAILURE, error };
  }
}

function getFancyAPI(data) {
  return dispatch => {
    dispatch(request());
    userService.getFancyAPI(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.FANCY_REQUEST };
  }
  function success(users) {
    return { type: userConstants.FANCY_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.FANCY_FAILURE, error };
  }
}

function getAllAds() {
  return dispatch => {
    dispatch(request());
    userService.getAllAds().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_ALL_ADS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_ALL_ADS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_ADS_LIST_FAILURE, error };
  }
}

function getAllNews() {
  return dispatch => {
    dispatch(request());
    userService.getAllNews().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_ALL_NEWS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_ALL_NEWS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_NEWS_LIST_FAILURE, error };
  }
}

function newsDetail(data) {
  return dispatch => {
    dispatch(request());
    userService.newsDetail(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.GET_ALL_NEWS_DETAILS_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_ALL_NEWS_DETAILS_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_ALL_NEWS_DETAILS_LIST_FAILURE, error };
  }
}

function finishedMatches(data) {
  return dispatch => {
    dispatch(request());
    userService.finishedMatches(data).then(
      users => {

        // console.log("rentdataAction::::::::::",users);
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.FINISHED_MATCH_SCORE_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.FINISHED_MATCH_SCORE_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.FINISHED_MATCH_SCORE_LIST_FAILURE, error };
  }
}

function homeMatches() {
  // console.log('homeMatcheshomeMatcheshomeMatcheshomeMatches  action');
  return dispatch => {
    dispatch(request());
    userService.homeMatches().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.HOME_SCORE_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.HOME_SCORE_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.HOME_SCORE_LIST_FAILURE, error };
  }
}

function upcomingMatches(data) {
  // console.log('upcomingMatchesupcomingMatchesupcomingMatchesupcomingMatches  action');
  return dispatch => {
    dispatch(request());
    userService.upcomingMatches(data).then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.UPCOMING_SCORE_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.UPCOMING_SCORE_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.UPCOMING_SCORE_LIST_FAILURE, error };
  }
}
function fixtures() {
  // console.log('fixturesfixturesfixturesfixtures  action');
  return dispatch => {
    dispatch(request());
    userService.fixtures().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.FIXTURES_SCORE_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.FIXTURES_SCORE_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.FIXTURES_SCORE_LIST_FAILURE, error };
  }
}

function Livescore(data) {
  // console.log('LivescoreLivescoreLivescore  action');
  return dispatch => {
    dispatch(request());
    userService.Livescore().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.LIVE_SCORE_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.LIVE_SCORE_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.LIVE_SCORE_LIST_FAILURE, error };
  }
}

function HomeList() {
  // console.log('HomeListHome1111111ListHomeList  action');
  return dispatch => {
    dispatch(request());
    userService.HomeList().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.HomeList_REQUEST };
  }
  function success(users) {
    return { type: userConstants.HomeList_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.HomeList_FAILURE, error };
  }
}

function SeriesList() {
  // console.log('SeriesListSeriesListSeriesList  action');
  return dispatch => {
    dispatch(request());
    userService.SeriesList().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.SeriesList_REQUEST };
  }
  function success(users) {
    return { type: userConstants.SeriesList_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.SeriesList_FAILURE, error };
  }
}

function Livescore2() {
  // console.log('LivescoreLivescoreLivescore  action');
  return dispatch => {
    dispatch(request());
    userService.Livescore2().then(
      users => {
        dispatch(success(users));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: userConstants.LIVE2_SCORE_LIST_REQUEST };
  }
  function success(users) {
    return { type: userConstants.LIVE2_SCORE_LIST_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.LIVE2_SCORE_LIST_FAILURE, error };
  }
}

