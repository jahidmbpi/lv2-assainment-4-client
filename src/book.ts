export interface IBook {
  title: string;
  author: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
