import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function ButtomCart({
  fullCart,
}: {
  fullCart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  interface item {
    name: string;
    id: string;
    description: string;
    price: number;
    img: string;
    quntity: number;
  }

  const items = useSelector(
    (state: { cart: { items: item[]; total: number } }) => state.cart.items
  );
  const total = useSelector(
    (state: { cart: { items: item[]; total: number } }) => state.cart.total
  );

  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    const initialValue = 0;
    if (items.length > 0) {
      const num = items.reduce(
        (currentvalue: number, item: item) => currentvalue + item.quntity,
        initialValue
      );
      setNumberOfItems(num);
    }
  }, [items]);

  const sideCartHandler = () => {
    fullCart(true);
  };
  return (
    items.length && (
      <div
        onClick={sideCartHandler}
        className="text-slate-50 px-4 py-2 bottom-0 sticky bg-cyan-500 h-14 w-full flex justify-between w-full items-center lg:hidden"
      >
        <div className="text-xl flex items-center gap-1">
          <ShoppingCartIcon width={20} height={20} />
          سبد خرید
          <span className="text-base">
            ({numberOfItems.toLocaleString("fa-IR")})
          </span>
        </div>
        <div className="text-md h-8 py-1 px-4 bg-cyan-400 rounded-2xl flex items-center gap-2 ">
          <span>{total.toLocaleString("fa-IR")}</span>
          <span>تومان</span>
        </div>
      </div>
    )
  );
}

export default ButtomCart;
