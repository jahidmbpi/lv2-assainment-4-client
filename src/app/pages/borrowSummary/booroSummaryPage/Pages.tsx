import ExtraBanner from "@/extraComponents/extrabanner/ExtraBanner";
import BorrowSummary from "../BorrowSummary";
import Header from "@/extraComponents/Header";

export default function Pages() {
  return (
    <div>
      <ExtraBanner></ExtraBanner>
      <Header
        title="all borrow summary
"
      ></Header>
      <div className="max-w-7xl mx-auto mb-[100px]">
        <BorrowSummary></BorrowSummary>
      </div>
    </div>
  );
}
