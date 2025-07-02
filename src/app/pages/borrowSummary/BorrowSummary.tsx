import { useGetBorrowSummaryQuery } from "@/app/redux/api/borrowApi";

export default function BorrowSummary() {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();
  console.log(data);
  console.log(isLoading, isError);
  return <div>this is borrow summary page</div>;
}
