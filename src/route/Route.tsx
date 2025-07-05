import Root from "@/app/layOut/Root";
import AddbookPage from "@/app/pages/AddbookPage";

import BookDetails from "@/app/pages/bookDetails/BookDetails";
import Pages from "@/app/pages/borrowSummary/booroSummaryPage/Pages";

import Home from "@/app/pages/home/Home";
import UpdateBook from "@/app/pages/updateBook/UpdateBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addbook",
        element: <AddbookPage></AddbookPage>,
      },
      {
        path: "/borrowsummary",
        element: <Pages></Pages>,
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/updateBook/:id",
        element: <UpdateBook></UpdateBook>,
      },
    ],
  },
]);
export default router;
