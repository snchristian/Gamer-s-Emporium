import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const gamesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints(builder) {
    return {

      fetchUser: builder.query({
        query() {
          return 'me'
        }
      }),

      signupUser: builder.mutation({

        query: (body) => ({
          url: `signup`,
          method: 'POST',
          body,
        }),
      }),

      loginUser: builder.mutation({

        query: (body) => ({
          url: `login`,
          method: 'POST',
          body,
        }),
      }),

      logOutUser: builder.mutation({
        query() {
          return {
            url: `logout`,
            method: 'DELETE',
          }
        }

      }),

      fetchQuestion: builder.query({
        query() {
          return 'questions'
        }
      }),

      updateUserData: builder.mutation({
        query: ({ id, ...patch }) => ({
          url: `users/${id}`,
          method: 'PATCH',
          body: patch,
        })
      }),

      fetchGames: builder.query({
        query() {
          return 'games'
        }
      }),
      addGame: builder.mutation({
        query: (body) => ({
          url: `user_games`,
          method: 'POST',
          body,
        })
      }),

      removeGame: builder.mutation({
        query:(id) =>({
          url: `user_games/${id}`,
          method: `DELETE`

        })

      }),

      addUserRevview:builder.mutation({
        query: (body) => ({
          url: `reviews`,
          method: 'POST',
          body,
        })
      }),
      
    }
  }
})


export const { useFetchUserQuery, useSignupUserMutation, useLoginUserMutation, useLogOutUserMutation, useFetchQuestionQuery, useUpdateUserDataMutation,useFetchGamesQuery,useAddGameMutation,useRemoveGameMutation,useAddUserRevviewMutation} = gamesApi