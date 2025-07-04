import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/app/redux/api/booksApi";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  const { data, isLoading, isError } = useGetSingleBookQuery(id as string);
  const [updateBook, { isSuccess, isError: isUpdateError }] =
    useUpdateBookMutation();

  // ✅ Loading & Error Handling
  if (isLoading) return <p className="text-blue-500">Loading...</p>;
  if (isError || !data?.data)
    return <p className="text-red-500">Book not found.</p>;

  const {
    name,
    image,
    author,
    title,
    genre,
    isbn,
    description,
    copies,
    available,
  } = data.data;

  const onSubmit = async (formData: any) => {
    await updateBook({
      id: id as string,
      data: formData,
    }).unwrap();
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            {...register("name", { required: true })}
            defaultValue={name}
            className="w-full border px-3 py-2 rounded"
            placeholder="Book name"
          />
        </div>

        <div>
          <label className="block mb-1">Title</label>
          <input
            {...register("title", { required: true })}
            defaultValue={title}
            className="w-full border px-3 py-2 rounded"
            placeholder="Book title"
          />
        </div>

        <div>
          <label className="block mb-1">Author</label>
          <input
            {...register("author", { required: true })}
            defaultValue={author}
            className="w-full border px-3 py-2 rounded"
            placeholder="Author name"
          />
        </div>

        <div>
          <label className="block mb-1">Genre</label>
          <select
            {...register("genre", { required: true })}
            className="w-full border px-3 py-2 rounded"
            defaultValue={genre}
          >
            <option value="SCIENCE">Science</option>
            <option value="FICTION">Fiction</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="HISTORY">History</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">ISBN</label>
          <input
            {...register("isbn", { required: true })}
            defaultValue={isbn}
            className="w-full border px-3 py-2 rounded"
            placeholder="ISBN"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            {...register("description")}
            defaultValue={description}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Book description"
          />
        </div>

        <div>
          <label className="block mb-1">Copies</label>
          <input
            type="number"
            {...register("copies", { required: true })}
            defaultValue={copies}
            className="w-full border px-3 py-2 rounded"
            placeholder="Number of copies"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("available")}
            defaultChecked={available}
          />
          <label>Available</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Update Book
        </button>

        {isSuccess && (
          <p className="text-green-600 pt-2">✅ Book updated successfully!</p>
        )}
        {isUpdateError && (
          <p className="text-red-600 pt-2">❌ Failed to update book.</p>
        )}
      </form>
    </div>
  );
}
