"use client";
import Navbar from "@/components/Navbar";
import OrderOrRules from "@/components/OrderOrRules";
import TopPart from "@/components/TopPart";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import BottomCart from "@/components/BottomCart";
import Cart from "@/components/Cart";
import { useState } from "react";

export default function Home() {
  const [showFullCart, setShowFullCart] = useState(false);

  return (
    <Provider store={store}>
      <main className="min-h-screen ">
        <Navbar />
        <div className="bg-gray-50 lg:px-14">
          <TopPart />
          <div className=" pl-3 pt-6  lg:flex  lg:justify-between">
            <OrderOrRules cartFullSize={showFullCart} />
            <Cart fullSize={showFullCart} fullSizeHandler={setShowFullCart} />
          </div>
        </div>
        <BottomCart fullCart={setShowFullCart} />
      </main>
    </Provider>
  );
}
