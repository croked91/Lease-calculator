import { PostCalcParams } from 'shared/api/typicode/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hookb.in/',
    }),
    tagTypes: ['PostCalcParams'],
    endpoints: (build) => ({
        postCalculation: build.mutation<{}, PostCalcParams>({
            query: (calculation) => ({
                headers: {'Content-Type': 'application/json'},
                url: `eK160jgYJ6UlaRPldJ1P`,
                method: 'POST',
                body: calculation,
            }),
        }),
    }),
})


export const { usePostCalculationMutation } = api