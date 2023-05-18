import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function ButtomCart() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  console.log(items);

  return (
    items.length && (
      <div className="text-slate-50 px-4 py-2 bottom-0 sticky bg-cyan-500 h-12 w-full flex justify-between w-full flex-row-reverse">
        <div className="text-xl flex flex-row-reverse items-center gap-1">
          <ShoppingCartIcon width={20} height={20} />
          سبد خرید
          <span className="text-base">({items.length})</span>
        </div>
        <div className="text-sm py-2 px-4 bg-cyan-400 rounded-2xl flex items-center flex-row-reverse gap-2">
          <span>{total}</span>
          <span> تومان</span>
        </div>
      </div>
    )
  );
}

export default ButtomCart;
