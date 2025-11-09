import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "@/app/redux/api/booksApi";

import { Card } from "@/components/ui/card";

import { GrView } from "react-icons/gr";
import { Link, useNavigate } from "react-router";
import { Modal } from "../borrowSummary/Modal";
import Loader from "@/loader/Loader";
import "./book.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export default function Allbooks() {
  const { data, isLoading, isError } = useGetAllBooksQuery();
  const navigate = useNavigate();
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
      await deleteBook(id).unwrap();
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
        <Card key={book._id} className="relative group">
          <div className="h-[60%]">
            <img src={book.image} alt="" className="rounded-lg" />
          </div>

          <div className="flex flex-col  space-y-1">
            <h2 className="text text-[20px] font-light  font-sans">
              {" "}
              Name:{book.name}
            </h2>

            <div className="flex justify-between ">
              <h2 className="text-[16px] font-sans font-normal">
                Type:{book.genre}
              </h2>
              <p className="font-sans">Isbn:{book.isbn}</p>
            </div>
            <div className="flex justify-between">
              <h2
                className={book.available ? "text-green-500" : "text-red-500"}
              >
                {book.available ? "Available" : "Not Available"}
              </h2>

              <p className="font-[18px] font-sans">copys:{book.copies}</p>
            </div>
            <div className="flex justify-between items-center">
              <Modal bookId={book._id} />
              <Link to={`/details/${book._id}`}>
                <GrView size={20} className="text-2xl text-gray-500" />
              </Link>
            </div>
          </div>

          <div className="absolute z-10 right-4 top-4 hidden group-hover:block">
            <div className=" flex gap-4">
              <FaRegEdit
                className="text-gray-500"
                size={24}
                onClick={() => navigate(`/updateBook/${book._id}`)}
              />

              <RiDeleteBin6Line
                size={24}
                className="text-gray-500"
                onClick={() => handelDelete(book._id)}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
