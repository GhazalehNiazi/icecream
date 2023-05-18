"use client";
import Navbar from "@/components/Navbar";
import OrderOrRules from "@/components/OrderOrRules";
import TopPart from "@/components/TopPart";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ButtomCart from "@/components/ButtomCart";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="min-h-screen">
        <Navbar />
        <div className="bg-gray-50">
          <TopPart />
          <OrderOrRules />
        </div>
        <ButtomCart />
      </main>
    </Provider>
  );
}
