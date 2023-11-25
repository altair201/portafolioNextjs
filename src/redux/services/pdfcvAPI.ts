import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pdfcvApi=createApi({
    reducerPath: 'pdfcvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    endpoints: (builder) => ({
        getpdfcv: builder.query<string, void>({
            query: () => 'pdfcv'
        }),
    }),
})
export const { useGetpdfcvQuery } = pdfcvApi;