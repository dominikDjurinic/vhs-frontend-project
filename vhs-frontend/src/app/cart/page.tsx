import { NotFinished } from "@/components/NotFinished";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";

export default function Cart() {
  return (
    <>
      <Header selectedNav="Cart" />
      <div className="wrapper">
        <NotFinished name="Cart" />
      </div>
      <Footer />
    </>
  );
}
