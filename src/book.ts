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
  image: string;
  name: string;
  title: string;
  genre: Genre;
  author: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
  updatedAt: Date;
}
