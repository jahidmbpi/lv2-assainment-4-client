import ExtraBanner from "@/extraComponents/extrabanner/ExtraBanner";
import BorrowSummary from "../BorrowSummary";

import H from "@/extraComponents/H";

export default function Pages() {
  return (
    <div>
      <ExtraBanner></ExtraBanner>
      <H></H>
      <div className="max-w-7xl mx-auto mb-[100px]">
        <BorrowSummary></BorrowSummary>
      </div>
    </div>
  );
}
