const initialState = {
    auth: null,
    user: null,
    authenticating: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {      
        case 'LOGIN_FETCHED': {
            return {
                ...state,
                auth: action.payload,
                authenticating: null,
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                auth: null,
                user: null,
                authenticating: null,
            };
        }
        case 'USER_DATA_FETCHED': {
            return {
                ...state,
                user: action.payload,
                authenticating: null,
            };
        }
        case "BEGIN_AUTHENTICATING":
            return {
                ...state,
                authenticating: true,
            };
        case "END_AUTHENTICATING":
            return {
                ...state,
                authenticating: null,
            };
        case 'INIT': {
            return {
                ...state,
                auth: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
export const selectAuth = (state) => state?.auth?.auth;
export const selectUser = (state) => state?.auth?.user;
export const selectAuthenticating = (state) => state?.auth?.authenticating;