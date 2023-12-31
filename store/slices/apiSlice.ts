// slices/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/api/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/api/login",
        method: "POST",
        body,
      }),
    }),
    getUsers: builder.query<any, number>({
      query: (page) => `/api/users?page=${page}`,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetUsersQuery } = api;
