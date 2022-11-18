import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { dashboard } from './dashboard.reducer';
import { theme } from './theamreducer';
import { matches } from './matchesreducer';
import { leng } from './languagereducer';

import { alert } from './alert.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme','matches','leng'],
  // whitelist:['matches']
};

// const rootReducerTemp = combineReducers({
//   booksReducer: persistReducer(persistConfig, booksReducer)
// });

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  theme:persistReducer(persistConfig, theme),
  matches:persistReducer(persistConfig,matches),
  leng:persistReducer(persistConfig,leng),
  
  dashboard,
});

export default rootReducer;
