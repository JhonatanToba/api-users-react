import axios from "axios";
import { useSelector } from "react-redux";

const iAX = axios.create(
  {
    baseURL: 'https://reqres.in/api',
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

iAX.interceptors.request.use(
  config => {
    console.log('Interceptor Request');
    
    return config
  },
  error => {
    return( Promise.reject(error))
  }
);

iAX.interceptors.response.use(
  response => {
    console.log('Interceptor response');
    return response
  },
  error => {
    console.log(error);
    
    return( Promise.reject(error) )
  }
);

export default iAX;