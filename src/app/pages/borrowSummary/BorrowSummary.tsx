import { useGetBorrowSummaryQuery } from "@/app/redux/api/borrowApi";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loader from "@/loader/Loader";
export default function BorrowSummary() {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();
  console.log(data);
  console.log(isLoading, isError);
  const totalborrow = data?.reduce(
    (total, item) => total + item.totalQuantity,
    0
  );
  console.log(totalborrow);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" ">book name</TableHead>
                <TableHead className=" "> book title</TableHead>

                <TableHead className=" ">book isbn</TableHead>
                <TableHead className="  "> book quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((book) => (
                <TableRow key={book.book.isbn}>
                  <TableCell>{book.book.name}</TableCell>
                  <TableCell>{book.book.title}</TableCell>
                  <TableCell>{book.book.isbn}</TableCell>
                  <TableCell>{book.totalQuantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total borow book</TableCell>
                <TableCell className="">= {totalborrow}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
