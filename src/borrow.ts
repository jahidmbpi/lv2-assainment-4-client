export interface IBookSummary {
  title: string;
  isbn: string;
  name: string;
}

export interface IBorrowedBookItem {
  totalQuantity: number;
  book: IBookSummary;
}
export type BorrowForm = {
  bookId: string;
  quantity: number;
  dueDate: string;
};
