import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type pdf = {
    id: string
    curriculum: string
}
export const pdfcvApi=createApi({
    reducerPath: 'pdfcvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    endpoints: (builder) => ({
        getpdfcv: builder.query<string, void>({
            query: () => 'pdfcv',
            transformResponse: (response: pdf) => response.curriculum
        }),
    }),
})
export const { useGetpdfcvQuery } = pdfcvApi;