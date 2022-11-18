import { CONST } from '../_config';
import { authHeader } from '../_helpers';
import axios from 'axios';

import { store } from '../_helpers/store';



export const userService = {
  
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
  getAllAds,
  matchInfo,
  squadByMatchId,
  getFancyAPI,
  getScoreAPI,
  teamRanking,
  HomeList,
  SeriesList,
  SeriesListDATA,
  pointsTableDATA,
  getAllVideo,
  // createTicket

};
function logout() {

}



















function SeriesListDATA(data) {
  console.log("squadByMatchId::::", data);

  let { users } = store.getState()
  const options = {
    // url: CONST.BACKEND_URL + `/squadByMatchId?match_id=${data.match_id}`,/matchesBySeriesId?series_id=117 
    url: CONST.BACKEND_URL + `/matchesBySeriesId?series_id=${data.series_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ0MjM1OWI2MzJkYTBmMjgwM2ExODMiLCJpYXQiOjE2NDU4OTc1NDJ9.pSlwZei5-auWhjmLZfhh0lALBWe_tCxi8WrsPUZQ4No"
    },
  };

  // console.log("optionsoptionsoptions:::::::getLiveScoreByMatchId::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        SeriesListDATA: data.data
      }
     // console.log("I am service :::::::squad::", data.data);
      return bucketObj;
    });
}




function getAllVideo(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/getVideoList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
     data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('gsaihduaisodfy89aswsiopufd90szu8d90s', data);
      let bucketObj = {
        getAllVideo:  data.data.list
      }
      //  console.log("I AM IN getAllNews service:::", bucketObj);
      return bucketObj;
    });
}

function pointsTableDATA(data) {
  // console.log("squadByMatchIdpointdata::::", data);

  let { users } = store.getState()
  const options = {
    
    url: CONST.BACKEND_URL + `/pointsTable?series_id=${data.series_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    
    },
  };

  

  return axios(options)
    .then(data => {
      let bucketObj = {
        pointsTableDATA: data.data.data
      }
     
      return bucketObj;
    });
}



function teamRanking(data) {
  let { users } = store.getState();
  const options = {
    url: CONST.BACKEND_URL + `/teamRanking?type=${data.type}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(user => {
      // console.log("getRankgetRankgetRank ", user.data);
      let userObj = {
        getTeamRankData: user.data.data
      }
      // console.log("getRankDatagetRankData service:::", userObj);
      return userObj;
    });
}


function getRank(data) {
  let { users } = store.getState();
  const options = {
    url: CONST.BACKEND_URL + `/playerRanking?type=${data.type}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(user => {
      // console.log("getRankgetRankgetRank ", user.data);
      let userObj = {
        getRankData: user.data.data
      }
      // console.log("getRankDatagetRankData service:::", userObj);
      return userObj;
    });
}

function getLiveScoreByMatchId(data) {
  // console.log("datadata_______getLiveScoreByMatchId___::::", data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/liveMatch?match_id=${data.match_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ0MjM1OWI2MzJkYTBmMjgwM2ExODMiLCJpYXQiOjE2NDU4OTc1NDJ9.pSlwZei5-auWhjmLZfhh0lALBWe_tCxi8WrsPUZQ4No"
    },
  };

  // console.log("optionsoptionsoptions:::::::getLiveScoreByMatchId::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        getLiveScoreByMatchId: data.data.data
      }
      // console.log("I am service :::::::getLiveScoreByMatchId::", bucketObj);
      return bucketObj;
    });
}

function matchInfo(data) {
  // console.log("datadata_______getLiveScoreByMatchId___::::", data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/matchInfo?match_id=${data.match_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ0MjM1OWI2MzJkYTBmMjgwM2ExODMiLCJpYXQiOjE2NDU4OTc1NDJ9.pSlwZei5-auWhjmLZfhh0lALBWe_tCxi8WrsPUZQ4No"
    },
  };

  // console.log("optionsoptionsoptions:::::::getLiveScoreByMatchId::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        matchInfo: data.data.data
      }
      // console.log("I am service :::::::getLiveScoreByMatchId::", bucketObj);
      return bucketObj;
    });
}

function squadByMatchId(data) {
  // console.log("squadByMatchId::::", data);

  let { users } = store.getState()
  const options = {
    // url: CONST.BACKEND_URL + `/squadByMatchId?match_id=${data.match_id}`,
    url: CONST.BACKEND_URL + `/squadByMatchId?match_id=${data.match_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ0MjM1OWI2MzJkYTBmMjgwM2ExODMiLCJpYXQiOjE2NDU4OTc1NDJ9.pSlwZei5-auWhjmLZfhh0lALBWe_tCxi8WrsPUZQ4No"
    },
  };

  // console.log("optionsoptionsoptions:::::::getLiveScoreByMatchId::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        squadByMatchId: data.data.data
      }
     // console.log("I am service :::::::squad::", data.data);
      return bucketObj;
    });
}

function getScoreAPI(data) {
  // console.log("service_______getLiveScoreByMatchId___::::", data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/scorecardByMatchId?match_id=${data.match_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ0MjM1OWI2MzJkYTBmMjgwM2ExODMiLCJpYXQiOjE2NDU4OTc1NDJ9.pSlwZei5-auWhjmLZfhh0lALBWe_tCxi8WrsPUZQ4No"
    },
  };

  // console.log("optionsoptionsoptions:::::::getLiveScoreByMatchId::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        scoreCard: data.data.data
      }
      // console.log("I am service :::::::scorecardByMatchId85454::", bucketObj);
      return bucketObj;
    });
}

function getFancyAPI(data) {
  // console.log("datadata__FancyFancyFancyFancyFancy___::::", data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/matchFancy?match_id=${data.match_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ0MjM1OWI2MzJkYTBmMjgwM2ExODMiLCJpYXQiOjE2NDU4OTc1NDJ9.pSlwZei5-auWhjmLZfhh0lALBWe_tCxi8WrsPUZQ4No"
    },
  };

  // console.log("optionsoptionsoptions:::::::getLiveScoreByMatchId::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        scoreCard: data.data.data
      }
      // console.log("I am service :::::::getLiveScoreByMatchId::", bucketObj);
      return bucketObj;
    });
}


function getAllAds() {
  let { users } = store.getState()
  const options = {
    url: `https://dev.fastline.one/api/v1/getAllAds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getAllNewsgetAllNewsgetAllNews  datadatadata', data);
      let bucketObj = {
        getAllAds: data
      }
      // console.log("I AM IN getAllAds service:::", bucketObj);
      return bucketObj;
    });
}

function getAllNews(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/news`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getAllNewsgetAllNewsgetAllNews  datadatadata', data);
      let bucketObj = {
        getAllNewsData: data.data
      }
      // console.log("I AM IN getAllNews service:::", bucketObj);
      return bucketObj;
    });
}

function newsDetail(data) {
  // console.log("news_id___________$$$$$$$", data);
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/newsDetail?news_id=${data.news_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('getAllNewsgetAllNewsgetAllNews  datadatadata', data);
      let bucketObj = {
        getAllNewsDetails: data.data
      }
      // console.log("I AM IN getAllNews service:::", bucketObj);
      return bucketObj;
    });
}

function finishedMatches(data) {
  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/recentMatches`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      let bucketObj = {
        finishedMatchesScoreData: data.data
      }
      // console.log("service recent data:::::::::::::::::",bucketObj);
      return bucketObj;

    });
}



function homeMatches(data) {
  // console.log('homeMatcheshomeMatcheshomeMatches  SERVISESSSS');

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/homeMatches`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('homeMatcheshomeMatcheshomeMatches  datadatadata', data.data);
      let bucketObj = {
        homeMatchesScoreData: data.data
      }
      //console.log("I AM IN homeMatches service:::", bucketObj);
      return bucketObj;
    });
}

function upcomingMatches(data) {
  // console.log('##############', data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/upcomingMatches`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    data: JSON.stringify(data)
  };

  // console.log("upcomingMatches___service::::", options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        upcomingMatchesScoreData: data.data
      }
      // console.log("I am service::upcomingMatches::", bucketObj);

      return bucketObj;
    });
}

function fixtures(data) {
  // console.log('fixturesfixturesfixtures  SERVISESSSS');

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/fixtures?fromDate=2019-03-13&toDate=2019-03-13`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('fixturesfixturesfixtures  datadatadata', data.data);
      let bucketObj = {
        fixturesScoreData: data.data
      }
      //console.log("I AM IN fixtures service:::", bucketObj);
      return bucketObj;
    });
}

function Livescore(daa) {
  // console.log('data00000sportId::', data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/liveMatchList`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };

  // console.log('options_options_options::::Livescore::', options);

  return axios(options)
    .then(data => {
      // console.log('LivescoreLivescoreLivescore  datadatadata', data.data);
      let bucketObj = {
        liveScoreData: data.data
      }
      // console.log("I AM IN Livescore service:::", bucketObj);
      return bucketObj;
    });
}


function HomeList() {
  // console.log('data00000sportId:service1111111111:');

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/homeList`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };

  // console.log('options_options_options::::HomeList::', options);

  return axios(options)
    .then(data => {
      // console.log('HomeListHomeListHomeList  datadatada666666666ta', data);
      let bucketObj = {
        HomeListData: data.data
      }
      // console.log("I AM IN Livescore service:::", bucketObj);
      return bucketObj;
    });
}
function SeriesList() {
  // console.log('data00000sportId::', data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/SeriesList`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };

  // console.log('options_options_options::::SeriesList::', options);

  return axios(options)
    .then(data => {
      let bucketObj = {
        SeriesListData: data.data
      }
      // console.log("I AM IN Livescore service:::", bucketObj);
      return bucketObj;
    });
}



function recentMatches() {
  // console.log('data00000sportId::', data);

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/homeList`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    // data: JSON.stringify(data)
  };

  // console.log('options_options_options::::HomeList::', options);

  return axios(options)
    .then(data => {
      // console.log('HomeListHomeListHomeList  datadatadata', data.data);
      let bucketObj = {
        HomeListData: data.data
      }
      // console.log("I AM IN Livescore service:::", bucketObj);
      return bucketObj;
    });
}









// function SeriesList() {
//   // console.log('data00000sportId::', data);

//   let { users } = store.getState()
//   const options = {
//     url: CONST.BACKEND_URL + `/seriesList`,
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       "Authorization": users ? "Bearer " + users.token : null
//     },
//     // data: JSON.stringify(data)
//   };

//   // console.log('options_options_options::::SeriesList::', options);

//   return axios(options)
//     .then(data => {
//       // console.log('SeriesListSeriesListSeriesList  datadatadata', data.data);
//       let bucketObj = {
//         SeriesListData: data.data
//       }
//       // console.log("I AM IN Livescore service:::", bucketObj);
//       return bucketObj;
//     });
// }






function Livescore2(data) {
  // console.log('LivescoreLivescoreLivescore  serasdfasdfasdf');

  let { users } = store.getState()
  const options = {
    url: CONST.BACKEND_URL + `/Livescore`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": users ? "Bearer " + users.token : null
    },
    data: JSON.stringify(data)
  };
  return axios(options)
    .then(data => {
      // console.log('LivescoreLivescoreLivescore  datadatadata',data.data);
      let bucketObj = {
        liveScoreData: data.data
      }
      // //console.log("I AM IN Livescore service:::", bucketObj);
      return bucketObj;
    });
}

