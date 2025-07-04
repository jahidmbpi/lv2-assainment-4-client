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
    getSingleBook: builder.query<IBook, string>({
      query: (id) => `/${id}`,
    }),

    updateBook: builder.mutation<IBook, { id: string; data: IBook }>({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useAddBooksMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
