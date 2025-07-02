import Root from "@/app/layOut/Root";
import AddBooks from "@/app/pages/addBooks/AddBooks";
import Allbooks from "@/app/pages/allBooks/Allbooks";
import BorrowSummary from "@/app/pages/borrowSummary/BorrowSummary";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Allbooks></Allbooks>,
      },
      {
        path: "/addbook",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/borrowsummary",
        element: <BorrowSummary></BorrowSummary>,
      },
    ],
  },
]);
export default router;
