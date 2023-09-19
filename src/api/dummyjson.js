import axios from 'axios'
import Constants from 'expo-constants'
import qs from 'qs';

const added_data_axios = {
    server_key: process.env.EXPO_PUBLIC_SERVER_KEY
};
  
export const authApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        'content-type': 'application/x-www-form-urlencoded', 
        'responseType': 'application/json',
    },
    transformRequest: [(data) => {
        return {...added_data_axios, ...data};
      }, ...axios.defaults.transformRequest],
      params: added_data_axios,    
    });

export const dummyjsonApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'responseType': 'application/json'
    },
    transformRequest: [(data) => {
        return {...added_data_axios, ...data};
      }, ...axios.defaults.transformRequest],
    params: added_data_axios,
});