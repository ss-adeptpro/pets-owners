import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_DEAFULT_TIMEOUT, Header } from '../../constants/apiConstants';

// Creates an api service to use in the application
// export const apiSlice = createApi({
//     reducerPath: 'baseApi',
//     baseQuery: fetchBaseQuery({ 
//       baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,  
//       /*
//         Set a timeout for the api otherwise api requests will stay pending until your api resolves 
//         the request(s) or it reaches the browser's default timeout
//       */
//       timeout: API_DEAFULT_TIMEOUT,  // Set a default timeout
//       prepareHeaders: (headers) => {
//         headers.set('Content-Type', Header['Content-Type']);
//         return headers;
//       },
//     }),
//     endpoints: () => ({})
// })

const baseQuery = fetchBaseQuery({ 
  baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,  
  /*
    Set a timeout for the api otherwise api requests will stay pending until your api resolves 
    the request(s) or it reaches the browser's default timeout
  */
  timeout: API_DEAFULT_TIMEOUT,  // Set a default timeout
  prepareHeaders: (headers) => {
    headers.set('Content-Type', Header['Content-Type']);
    return headers;
  },
});

const baseQueryExtended = async (args: string | FetchArgs, api:any, extraOptions:any) => {  
  const result = await baseQuery(args, api, extraOptions);
  console.log('resultBase ', result)
  if (result?.error?.status) {
    return {error:{status: result?.meta?.response?.status, error: result?.meta?.response?.statusText}}
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryExtended,
  endpoints: () => ({})
})