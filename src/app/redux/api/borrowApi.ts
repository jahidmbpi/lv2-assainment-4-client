import type { IBorrowedBookItem } from "@/borrow";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Borrw {
  bookId: string;
  userId: string;
  borrowDate: string;
}

// Define the API
export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["borrow"],
  endpoints: (builder) => ({
    getBorrowSummary: builder.query<IBorrowedBookItem[], void>({
      query: () => "/borrow",
      transformResponse: (response: { data: IBorrowedBookItem[] }) =>
        response.data,
      providesTags: ["borrow"],
    }),
    createBorrow: builder.mutation<Borrw, Borrw>({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

// Export the hooks
export const { useGetBorrowSummaryQuery, useCreateBorrowMutation } = borrowApi;
