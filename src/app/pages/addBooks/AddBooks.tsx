import { useAddBooksMutation } from "@/app/redux/api/booksApi";
import type { IBook } from "@/book";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export default function AddBooks() {
  const { register, handleSubmit, reset } = useForm();
  const [addBooks, { isLoading, isSuccess, isError }] = useAddBooksMutation();
  console.log(isLoading, isSuccess, isError);
  const navigate = useNavigate();

  const onSubmit = async (data: IBook) => {
    console.log("Form Data:", data);
    const result = await addBooks(data).unwrap();
    console.log(result);
    reset();
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 border rounded shadow my-[100px]">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter book name"
            />
          </div>
          <div>
            <label className="block mb-1">Title</label>
            <input
              {...register("title", { required: true })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter book title"
            />
          </div>

          <div>
            <label className="block mb-1">Author</label>
            <input
              {...register("author", { required: true })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Author name"
            />
          </div>

          <div>
            <label className="block mb-1">Genre</label>
            <select
              {...register("genre", { required: true })}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Genre</option>
              <option value="SCIENCE">Science</option>
              <option value="FICTION">Fiction</option>
              <option value="BIOGRAPHY">Biography</option>
              <option value="HISTORY">History</option>
              <option value="NON_FICTION">NON_FICTION</option>
              <option value="FANTASY">FANTASY</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Image</label>
            <input
              {...register("image", { required: true })}
              className="w-full border px-3 py-2 rounded"
              placeholder="please provide book image "
            />
          </div>

          <div>
            <label className="block mb-1">Isbn</label>
            <input
              {...register("isbn", { required: true })}
              className="w-full border px-3 py-2 rounded"
              placeholder="ISBN Number"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">Copies</label>
          <input
            type="number"
            {...register("copies", { required: true, min: 1 })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Number of copies"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Book description"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("available")} />
          <label>Available</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 capitalize"
        >
          add new book
        </button>
      </form>
    </div>
  );
}
