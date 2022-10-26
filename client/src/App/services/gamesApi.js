import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const gamesApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:'/'
    }),
    endpoints(builder){
        return{
            
        fetchUser: builder.query({
            query(){
                    return 'me'
                }
            }),

            signupUser: builder.mutation({
                // alt syntax
                query: (body) => ({
                    url: `signup`,
                    method: 'POST',
                    body,
                  }),
            })
            
          
}
}
})


export const {useFetchUserQuery,useSignupUserMutation} = gamesApi