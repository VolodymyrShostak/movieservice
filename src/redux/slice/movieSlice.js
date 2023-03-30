import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const KEY = "50f0044b98fb36babd948adb82a325bf";
const LANGUAGE = "uk";

export const movieSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  tagTypes: ["movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["movies"],
    }),
    getMovie: builder.query({
      query: (id) => `movie/${id}?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["movie"],
    }),
    getUpcomingMovies: builder.query({
      query: () => `movie/upcoming?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["upcomingmovies"],
    }),
    getTopRatedMovies: builder.query({
      query: () => `movie/top_rated?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["topratedmovies"],
    }),
    getNowPlayingMovies: builder.query({
      query: () => `movie/now_playing?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["nowplayingmovies"],
    }),
    getLatestMovies: builder.query({
      query: () => `movie/latest?api_key=${KEY}&language=${LANGUAGE}`,
      providesTags: ["latestmovies"],
    }),
    getSearchMovies: builder.query({
      query: (search) =>
        `search/movie?api_key=${KEY}&language=${LANGUAGE}&query=${search}`,
      providesTags: ["searchmovies"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useGetLatestMoviesQuery,
  useGetMovieQuery,
  useGetSearchMoviesQuery,
} = movieSlice;
