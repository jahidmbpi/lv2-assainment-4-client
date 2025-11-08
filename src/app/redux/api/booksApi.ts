import type { IBook, UpdateBookFormData } from "@/book";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lv2-assainment-3-1.onrender.com/api/books",
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "books" as const, id: _id })),
              { type: "books", id: "LIST" },
            ]
          : [{ type: "books", id: "LIST" }],
    }),

    addBooks: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: "/create-book",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "books", id: "LIST" }],
    }),

    getSingleBook: builder.query<IBook, string>({
      query: (id) => `/${id}`,
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: IBook;
      }) => response.data,
      providesTags: (_result, _error, id) => [{ type: "books", id }], // item-level
    }),

    updateBook: builder.mutation<
      IBook,
      { id: string; data: UpdateBookFormData }
    >({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "books", id }],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "books", id },
        { type: "books", id: "LIST" },
      ],
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
