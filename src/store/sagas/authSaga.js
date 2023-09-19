import { takeLatest, put , call, select} from 'redux-saga/effects';
import { fetchDataService, forgotPasswordService, loginService, logoutService, registerService } from '../../services/authentication';

function* login({payload}) {
    try {
        const response = yield call(loginService, payload);
        if(response){
            yield put({ type: 'LOGIN_FETCHED', payload: {username: payload.username, password: payload.password, access_token: response.access} });
            //yield put({ type: 'LOGIN_FETCHED', payload: response });
            yield put({ type: 'FETCH_USER_DATA', payload: response });
        }
    } catch (error) {
        console.log('login error', error);
        //yield put({ type: 'LOGIN_FAILED', payload: error });
    }
}

function* fetchData({payload}) {
    try {
        // If we have a user, we don't need to fetch it again
        const response = payload;

        // but sometimes we need to fetch a user using another api call
        //const response = yield call(fetchDataService, payload);

        if(response){
            yield put({ type: 'USER_DATA_FETCHED', payload: response });
        }
    } catch (error) {
        console.log('fetch data error', error);
        //yield put({ type: 'LOGIN_FAILED', payload: error });
    }
}

function* logout({payload}) {
    try {
        const response = yield call(logoutService, payload);
        yield put({ type: 'LOGOUT' });
    } catch (error) {
        console.log('logout error', error);
        //yield put({ type: 'LOGIN_FAILED', payload: error });
    }
}

function* register({payload}) {
    try {
        const response = yield call(registerService, payload);
        const newPayload = {username: payload.username, password: payload.password, rememberMe: true};
        yield put({ type: 'LOGIN_CALLED', payload: newPayload });
    } catch (error) {
        console.error('logout error', error);
        //yield put({ type: 'LOGIN_FAILED', payload: error });
    }
}

function* forgotPassword({payload}) {
    try {
        const response = yield call(forgotPasswordService, payload);

    } catch (error) {
        console.error('forgot password error', error);
        //yield put({ type: 'LOGIN_FAILED', payload: error });
    }
}


function* authSaga(){
    yield takeLatest('LOGIN_CALLED', login);
    yield takeLatest('FETCH_USER_DATA', fetchData)
    yield takeLatest('LOGOUT_CALLED', logout);
    yield takeLatest('REGISTER_CALLED', register);
    yield takeLatest('FORGOT_PASSWORD_CALLED', forgotPassword);
    /*
    yield takeLatest('LOGIN_EXPIRED', loginExpired);
    */
}
  
export default authSaga;
  