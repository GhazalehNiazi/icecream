import React from "react";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  add_item,
  remove_item,
  remove_all_items,
} from "@/store/features/cartSlice";

function Cart({
  fullSize,
  fullSizeHandler,
}: {
  fullSize: boolean;
  fullSizeHandler: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  interface item {
    name: string;
    id: string;
    description: string;
    price: number;
    img: string;
  }
  const items = useSelector(
    (state: { cart: { items: item[]; total: number } }) => state.cart.items
  );
  const total = useSelector(
    (state: { cart: { items: item[]; total: number } }) => state.cart.total
  );
  const dispatch = useDispatch();
  const addItemHandler = (item: item) => {
    dispatch(add_item(item));
  };
  const removeItemHandler = (item: item) => {
    dispatch(remove_item(item));
  };
  const removeAllItemHandler = () => {
    dispatch(remove_all_items());
  };
  
  return (
    <div
      className={clsx(
        "bg-white lg:static lg:h-max lg:basis-1/3 lg:w-5/12 lg:mr-10 lg:border lg:p-3",
        fullSize
          ? "h-screen absolute top-0 right-0 left-0 bottom-o h-screen w-full z-10 overflow-x-hidden"
          : "lg:sticky lg:top-8"
      )}
    >
      <div
        className={clsx(
          "bg-white lg:static lg:h-max ",
          fullSize
            ? "h-screen fixed top-0 right-0 left-0 bottom-o h-screen w-full  z-10 overflow-x-hidden"
            : "hidden lg:block lg:sticky lg:top-0"
        )}
      >
        <div className="p-2 border-b border-gray-200 flex items-center w-full justify-between text-xl font-semibold">
          <div>سبد خرید</div>
          <div className="flex ">
            <TrashIcon
              className="cursor-pointer"
              onClick={removeAllItemHandler}
              width={25}
              height={25}
            />
            <XMarkIcon
              className="cursor-pointer lg:hidden"
              width={25}
              height={25}
              onClick={() => fullSizeHandler(false)}
            />
          </div>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="px-2 py-1 border-b border-gray-200 flex flex-row w-full justify-between items-center"
          >
            <div>
              <div className="text-bold self-start text-right font-semibold">
                {item.name}
              </div>
              <div className="text-thin flex flex-row w-full gap-1">
                <span>{item.price.toLocaleString("fa-IR")} </span>
                <span>تومان</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                onClick={() => addItemHandler(item)}
                className="cursor-pointer w-6 h-6 border border-cyan-400 rounded-xl text-center align-middle leading-[18px]"
              >
                +
              </div>
              <div>{item.quntity.toLocaleString("fa-IR")}</div>
              <div
                onClick={() => removeItemHandler(item)}
                className=" cursor-pointer w-6 h-6 border border-cyan-400 rounded-xl text-center align-middle leading-[18px]"
              >
                -
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center gap-2 ">
          <div className="mb-3 font-medium flex items-center flex-row w-full justify-between p-2">
            <div className="text-lg">هزینه کل</div>
            <div className="text-lg font-semibold">
              {total.toLocaleString("fa-IR")} تومان
            </div>
          </div>
          <div className="text-cyan-500 text-bold text-xl my-6 cursor-pointer">
            کد تخفیف دارید؟
          </div>
          <button className="bg-cyan-500 w-11/12 text-slate-50  lg:px-14 xl:px-20 py-2 text-thin text-xl rounded-lg">
            تکمیل سفارش
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
