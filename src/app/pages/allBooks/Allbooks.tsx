import { useGetAllBooksQuery } from "@/app/redux/api/booksApi";

export default function Allbooks() {
  const { data, isLoading, isError } = useGetAllBooksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load books</p>;

  console.log("Books data:", data); // 🟡 এখানেই তুমি data পাবে

  return (
    <div>
      <h2>hello</h2>
      {/* {data?.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))} */}
    </div>
  );
}
