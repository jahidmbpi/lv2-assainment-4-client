import { useGetSingleBookQuery } from "@/app/redux/api/booksApi";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../borrowSummary/Modal";
import Loader from "@/loader/Loader";
import type { IBook } from "@/book";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id as string);
  console.log(data);
  console.log(isError);

  if (isLoading) {
    return <Loader></Loader>;
  }

  const {
    name,
    image,
    author,
    title,
    genre,
    isbn,
    description,
    available,
    copies,
    updatedAt,
    createdAt,
  } = data as IBook;
  console.log(name, image, author, title, genre, isbn, description);

  return (
    <div className="p-6 max-w-7xl mx-auto lg:mt-[100px]">
      <div className="flex flex-col sm:flex-col md:flex-row gap-4">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl">Name:{name}</h2>
            <p>Author:{author}</p>
          </div>
          <h3>Title:{title}</h3>
          <p> Description:{description}</p>
          <div className="flex justify-between">
            <h2>Type:{genre}</h2>
            <h2>
              isbn: <span className="mr-2">{isbn}</span>
            </h2>
          </div>
          <div className="flex justify-between">
            <h2 className={available ? "text-green-500" : "text-red-500"}>
              {available ? "Available" : "Not Available"}
            </h2>
            <h2>
              copies: <span className="mr-2">{copies}</span>{" "}
            </h2>
          </div>
          <div className="flex justify-between gap-7">
            <h2 className="">
              createdat: <span className="mr-2">{createdAt}</span>
            </h2>
            <h2 className="">
              updatedAt: <span className="mr-2">{updatedAt}</span>
            </h2>
          </div>
          <div className="flex justify-between">
            {typeof id === "string" && <Modal bookId={id} />}

            <Button className="bg-blue-600 capitalize">
              {" "}
              <Link to="/">back home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
