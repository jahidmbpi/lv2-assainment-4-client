import type { IBorrowedBookItem } from "@/borrow";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Borrw {
  book: string;
  quantity: number;
  dueDate: string;
}

// Define the API
export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lv2-assainment-3-1.onrender.com/api",
  }),
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
