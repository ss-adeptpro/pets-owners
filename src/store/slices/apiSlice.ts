import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Header } from '../constants/headerConstants';

//Creates an api service to use in the application
export const apiSlice = createApi({
    reducerPath: 'baseApi',
    
    baseQuery: fetchBaseQuery({ 
      baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
      prepareHeaders: (headers) => {
        headers.set('Content-Type', Header['Content-Type']);
        return headers;
      },
    }),
    endpoints: builder => ({})
})