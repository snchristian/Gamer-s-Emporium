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
        }),
      })


    }
  }
})


export const { useFetchUserQuery, useSignupUserMutation, useLoginUserMutation, useLogOutUserMutation, useFetchQuestionQuery, useUpdateUserDataMutation } = gamesApi