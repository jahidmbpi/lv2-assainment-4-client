export interface IBookSummary {
  title: string;
  isbn: string;
}

export interface IBorrowedBookItem {
  totalQuantity: number;
  book: IBookSummary;
}
