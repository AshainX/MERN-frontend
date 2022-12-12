import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/* //fetchbase query is just like axios
This is a very small wrapper around fetch that aims to simplify HTTP requests. 
It is not a full-blown replacement for axios, superagent, or any other more heavyweight
library, but it will cover the vast majority of your HTTP request needs.
fetchBaseQuery is a factory function that generates a data fetchin
 */

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Note', 'User'],  /* cache data */
    endpoints: builder => ({})   /* extened slices for notes and users */
})