import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type } from "os";

type Proyects = {
    id: string,
    name: string,
    description: string,
    image: string,
    ldeploy: string,
    lgithub: string
}

export const proyectsApi = createApi({
    reducerPath: 'proyectsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getProyects: builder.query<Proyects[], void>({
            query: () => 'proyects'
        })
    })
})

export const { useGetProyectsQuery } = proyectsApi;