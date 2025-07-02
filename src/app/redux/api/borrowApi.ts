import type { IBorrowedBookItem } from "@/borrow";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

// Export the hook
export const { useGetBorrowSummaryQuery } = borrowApi;
