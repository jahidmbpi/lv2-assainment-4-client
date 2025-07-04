import Root from "@/app/layOut/Root";
import AddBooks from "@/app/pages/addBooks/AddBooks";
import Allbooks from "@/app/pages/allBooks/Allbooks";
import BookDetails from "@/app/pages/bookDetails/BookDetails";

import BorrowSummary from "@/app/pages/borrowSummary/BorrowSummary";
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
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/borrowsummary",
        element: <BorrowSummary></BorrowSummary>,
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
