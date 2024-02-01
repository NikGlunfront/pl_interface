import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://pokeapi.co/api/v2/'

export const paylessApi = createApi({
    reducerPath: 'payless',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`
        }),
    })
})

export const { 
    useGetPokemonByNameQuery
} = paylessApi