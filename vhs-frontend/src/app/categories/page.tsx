import { NotFinished } from "@/components/NotFinished";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";

export default function Catalogue() {
  return (
    <>
      <Header selectedNav="Categories" />
      <div className="wrapper">
        <NotFinished name="Categories" />
      </div>
      <Footer />
    </>
  );
}
