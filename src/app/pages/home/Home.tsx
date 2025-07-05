import Banner from "@/extraComponents/Banner";
import Allbooks from "../allBooks/Allbooks";
import Header from "@/extraComponents/Header";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Header title="all book heare"></Header>
      <Allbooks></Allbooks>
    </div>
  );
}
