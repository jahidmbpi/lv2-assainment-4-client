import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/app/redux/api/booksApi";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface UpdateBookFormData {
  name: string;
  image: string;
  author: string;
  title: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export default function UpdateBook() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm<UpdateBookFormData>();
  const { data, isLoading, isError } = useGetSingleBookQuery(id as string);
  const [updateBook, { isSuccess, isError: isUpdateError }] =
    useUpdateBookMutation();

  if (isLoading)
    return <p className="text-blue-500 text-center mt-10">Loading...</p>;
  if (isError || !data)
    return <p className="text-red-500 text-center mt-10">Book not found.</p>;

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
  } = data;

  const onSubmit = async (formData: UpdateBookFormData) => {
    try {
      await updateBook({
        id: id as string,
        data: formData,
      }).unwrap();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4 py-8">
      {/* ফর্ম */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ✏️ Update Book Information
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Name</label>
            <input
              {...register("name", { required: true })}
              defaultValue={name}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Book name"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              defaultValue={title}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Book title"
            />
          </div>

          {/* Author + Copies */}
          <div className="flex w-full gap-2 items-center">
            <div className="flex-1">
              <label className="block font-medium mb-1 text-gray-700">
                Author
              </label>
              <input
                {...register("author", { required: true })}
                defaultValue={author}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Author name"
              />
            </div>

            <div className="flex-1">
              <label className="block font-medium mb-1 text-gray-700">
                Copies
              </label>
              <input
                type="number"
                {...register("copies", { required: true })}
                defaultValue={copies}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Number of copies"
              />
            </div>
          </div>

          {/* Genre + ISBN */}
          <div className="flex w-full gap-2 items-center">
            <div className="flex-1">
              <label className="block font-medium mb-1 text-gray-700">
                Genre
              </label>
              <select
                {...register("genre", { required: true })}
                defaultValue={genre}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="SCIENCE">Science</option>
                <option value="FICTION">Fiction</option>
                <option value="BIOGRAPHY">Biography</option>
                <option value="HISTORY">History</option>
                <option value="FANTASY">Fantasy</option>
                <option value="NON_FICTION">Non-Fiction</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block font-medium mb-1 text-gray-700">
                ISBN
              </label>
              <input
                {...register("isbn", { required: true })}
                defaultValue={isbn}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="ISBN"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Image URL
            </label>
            <input
              {...register("image", { required: true })}
              defaultValue={image}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Book image URL"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              defaultValue={description}
              rows={3}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Book description"
            />
          </div>

          {/* Available */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register("available")}
              defaultChecked={available}
              className="h-4 w-4 accent-blue-500"
            />
            <label className="text-gray-700">Available</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Update Book
          </button>

          {/* Status Messages */}
          {isSuccess && (
            <p className="text-green-600 pt-2 text-center font-medium">
              ✅ Book updated successfully!
            </p>
          )}
          {isUpdateError && (
            <p className="text-red-600 pt-2 text-center font-medium">
              ❌ Failed to update book.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
