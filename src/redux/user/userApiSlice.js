import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApiSlice = createApi({
  reducerPath: "userApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/users",

    prepareHeaders: (headers, { getState }) => {
      const token = getState().users.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["user"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: `/signup`,
        method: "POST",
        body: user,
      }),
      providesTags: ["user"],
    }),
    // http://localhost:3002/api/users/signin
    logInUser: builder.mutation({
      query: (user) => ({
        url: `/signin`,
        method: "POST",
        body: user,
      }),
      providesTags: ["user"],
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = userApiSlice;

export default userApiSlice;
