import type { IBook } from "@/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/books",
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query<IBook[], void>({
      query: () => "/getbook",
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: IBook[];
      }) => response.data,
      providesTags: ["books"],
    }),

    addBooks: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: "/create-book",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetAllBooksQuery, useAddBooksMutation } = bookApi;
