import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "@/app/redux/api/booksApi";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { GrView } from "react-icons/gr";
import { Link } from "react-router";
import { Modal } from "../borrowSummary/Modal";
import Loader from "@/loader/Loader";

export default function Allbooks() {
  const { data, isLoading, isError } = useGetAllBooksQuery();

  const [
    deleteBook,
    { isSuccess, isError: isDeleteError, isLoading: isDeleteLoading },
  ] = useDeleteBookMutation();
  console.log(isSuccess, isError, isDeleteLoading, isDeleteError);

  if (isLoading) return <Loader></Loader>;
  if (isError) return <p>Failed to load books</p>;

  console.log("Books data:", data);

  const handelDelete = async (id: string) => {
    try {
      console.log(id);
      await deleteBook(id);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
      {data?.map((book) => (
        <Card key={book._id} className="relative">
          <div className="h-[50%]">
            <img src={book.image} alt="" />
          </div>

          <div className="flex flex-col mt-4 space-y-2">
            <h2> Name:{book.name}</h2>

            <div className="flex justify-between ">
              <h2>type:{book.genre}</h2>
              <p>isbn:{book.isbn}</p>
            </div>
            <div className="flex justify-between">
              <h2
                className={book.available ? "text-green-500" : "text-red-500"}
              >
                {book.available ? "Available" : "Not Available"}
              </h2>

              <p>copys:{book.copies}</p>
            </div>
            <div className="flex justify-between">
              <Modal bookId={book._id} />
              <Button className="bg-blue-600">
                <Link to={`/updateBook/${book._id}`}>update</Link>
              </Button>

              <Button
                onClick={() => handelDelete(book._id)}
                className="bg-red-500"
              >
                delete
              </Button>
            </div>
          </div>

          <div className="absolute z-10 right-4 top-4">
            <Link to={`/details/${book._id}`}>
              <div className="flex gap-2">
                <h2 className="text-white"> view</h2>
                <GrView className="text-2xl text-white" />
              </div>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
