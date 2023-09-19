import AsyncStorage from "@react-native-async-storage/async-storage";
import { authApi, dummyjsonApi } from "../api/dummyjson";


export const loginService = async (values) => {
    try {
        const additionalParams = {
            username: values.username,
            password: values.password,
        };
        const response = await authApi.post('auth/login',  additionalParams);

        const responseData = response.data;

        // if we have an error, throw it
       //if(responseData.api_status !== 200){
       //     throw responseData;
       //}
       if(values.rememberMe)
       {
           try {  
             var saved_user = responseData;
             saved_user['password'] = values?.password;
             saved_user['username'] = values?.username;
             await AsyncStorage.setItem('user', JSON.stringify(saved_user));
           } catch (error) {
            throw error;
           }
       }
       return responseData;
    } catch (error) {
        if(error.response?.data?.message === "Invalid username or password" || error.response?.data?.message === "Invalid credentials"){
            throw {message: "Invalid username or password"};
        }
        throw error;
    }
}

export const fetchDataService = async (values) => {
    try{
        const response = await dummyjsonApi.post('/get-user-data?access_token='+values.access_token, {access_token: values.access_token, user_id: values.user_id, fetch: "user_data"});
        const responseData = response.data;

        if(responseData.api_status !== 200){
            throw responseData;
       }
       
       return responseData;
    } catch (error) {
        throw error;
    }
}

export const logoutService = async (values) => {
    try {
        await AsyncStorage.removeItem('user');
    } catch (error) {
        throw error;
    }
}

export const registerService = async (values) => {
    try {
        const additionalParams = {
            username: values.username,
            email: values.email,
            password: values.password,
        };
        const response = await authApi.post('users/add',  additionalParams);
        const responseData = response.data;

        // if we have an error, throw it
        //if(responseData.api_status !== 200){
        //        throw responseData;
        //}

        return responseData;
    } catch (error) {
        
        throw error;
    }
}

export const forgotPasswordService = async (values) => {
    try {
        const additionalParams = {
            email: values.email,
        };
        console.log('forgot password service', additionalParams);
        //const response = await authApi.post('users/forgot-password',  additionalParams);
        //const responseData = response.data;

        //return responseData;
        return true;
    } catch (error) {
        
        throw error;
    }
}