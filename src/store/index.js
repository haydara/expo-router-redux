import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from './reducers';

import { rootSaga } from './sagas';
 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
 
const store = createStore(
    rootReducer,
    applyMiddleware(
        ...middlewares,
        // createLogger
    )
);
 
sagaMiddleware.run(rootSaga);

AsyncStorage.getItem('user')
  .then((result) => { return JSON.parse(result);})
  .then((user) => { 
    if(user)
    {
      store.dispatch({ type: 'LOGIN_CALLED', payload: user })
    }
    else{
      store.dispatch({ type: 'DO_NOT_REMEMBER_USER', payload: {} })
    }
  }
);

export {store};
/*
import { Store, registerInDevtools } from "pullstate";


export const AuthStore = new Store({
  isLoggedIn: true,
});

registerInDevtools({AuthStore});
*/