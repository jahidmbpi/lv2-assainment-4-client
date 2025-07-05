export const genreList = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

type Genre = (typeof genreList)[number];

export interface IBook {
  _id: string;
  image: string;
  name: string;
  title: string;
  genre: Genre;
  author: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface FrpmData {
  image: string;
  name: string;
  title: string;
  genre: Genre;
  author: string;
  isbn: string;
  description?: string;
  copies: number;
}

export interface UpdateBookFormData {
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
