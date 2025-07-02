import { useAddBooksMutation } from "@/app/redux/api/booksApi";
import { useForm } from "react-hook-form";
export default function AddBooks() {
  const { register, handleSubmit } = useForm();
  const [addBooks, { isLoading, isSuccess }] = useAddBooksMutation();
  console.log(isLoading, isSuccess);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
    const result = await addBooks(data).unwrap();
    console.log(result);
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          </select>
        </div>

        <div>
          <label className="block mb-1">ISBN</label>
          <input
            {...register("isbn", { required: true })}
            className="w-full border px-3 py-2 rounded"
            placeholder="ISBN Number"
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

        <div>
          <label className="block mb-1">Copies</label>
          <input
            type="number"
            {...register("copies", { required: true, min: 1 })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Number of copies"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("available")} />
          <label>Available</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!title || !author) return;

//   await addBooks({ title, author });
//   setTitle("");
//   setAuthor("");
// };
