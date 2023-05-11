import Navbar from "@/components/Navbar";
import OrderOrRules from "@/components/OrderOrRules";
import TopPart from "@/components/TopPart";

export default function Home() {
  return (
    <main className="scroll-smooth bg-gray-50">
    
      <Navbar />
      <div className="bg-gray-50">
        <TopPart />
        <OrderOrRules />
      </div>
    </main>
  );
}
