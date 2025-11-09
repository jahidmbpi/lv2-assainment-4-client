import { useAddBooksMutation } from "@/app/redux/api/booksApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, type BookFormData } from "./book.schema";

export default function AddBooks() {
  // 🔹 Step 3: useForm setup with zodResolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const [addBooks, { isLoading }] = useAddBooksMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: BookFormData) => {
    try {
      const result = await addBooks(data).unwrap();
      console.log("Book Added:", result);
      reset();
      navigate("/");
    } catch (err) {
      console.error("Add book failed:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 border rounded shadow my-[100px]">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Grid fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Name */}
          <div>
            <label className="block mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter book name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1">Title</label>
            <input
              {...register("title")}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter book title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="block mb-1">Author</label>
            <input
              {...register("author")}
              className="w-full border px-3 py-2 rounded"
              placeholder="Author name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          {/* Genre */}
          <div>
            <label className="block mb-1">Genre</label>
            <select
              {...register("genre")}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Genre</option>
              <option value="SCIENCE">Science</option>
              <option value="FICTION">Fiction</option>
              <option value="BIOGRAPHY">Biography</option>
              <option value="HISTORY">History</option>
              <option value="NON_FICTION">Non Fiction</option>
              <option value="FANTASY">Fantasy</option>
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block mb-1">Image</label>
            <input
              {...register("image")}
              className="w-full border px-3 py-2 rounded"
              placeholder="Provide book image URL"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* ISBN */}
          <div>
            <label className="block mb-1">ISBN</label>
            <input
              {...register("isbn")}
              className="w-full border px-3 py-2 rounded"
              placeholder="ISBN Number"
            />
            {errors.isbn && (
              <p className="text-red-500 text-sm">{errors.isbn.message}</p>
            )}
          </div>
        </div>

        {/* Copies */}
        <div>
          <label className="block mb-1">Copies</label>
          <input
            type="number"
            {...register("copies", { valueAsNumber: true })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Number of copies"
          />
          {errors.copies && (
            <p className="text-red-500 text-sm">{errors.copies.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Book description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Available */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("available")} />
          <label>Available</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white py-2 px-4 rounded capitalize ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Adding..." : "Add new book"}
        </button>
      </form>
    </div>
  );
}
