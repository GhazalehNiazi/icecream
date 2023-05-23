import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add_item, remove_item } from "@/store/features/cartSlice";
import { useSelector } from "react-redux";
import clsx from "clsx";
interface Item {
  name: string;
  id: string;
  description: string;
  price: number;
  img: string;
  quantity: number;
}
interface InitialItem {
  name: string;
  id: string;
  description: string;
  price: number;
  img: string;
}

interface EachItemProps {
  item: InitialItem;
}

const EachItem: React.FC<EachItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const itemsSelector = useSelector(
    (state: { cart: { items: Item[]; total: number } }) => state.cart.items
  );

  const currentItemSelector = itemsSelector.find((i) => i.id === item.id);
  
  console.log(itemsSelector);

  const [itemIsAdded, setItemIsAdded] = useState(false);

  const incrementButtosnHandler = () => {
    dispatch(add_item(item));
    setItemIsAdded(true);
  };

  if (!currentItemSelector) {
  return <div>not found</div>
  }
  const decrementButtonHandler = () => {
    if (currentItemSelector.quantity > 1) {
      dispatch(remove_item(item));
    } else if (currentItemSelector.quantity === 1) {
      dispatch(remove_item(item));
      setItemIsAdded(false);
    }
  };
  return (
    <div
      key={item.id}
      className={clsx(
        "m-3 border border-gray-300 rounded-lg flex flex-col items-center ",
        currentItemSelector?.quantity > 0 ? "border-cyan-500" : ""
      )}
    >
      <Image
        priority
        alt={item.name}
        src={item.img}
        width={600}
        height={600}
        className="rounded-t-lg"
      />
      <div className="p-2 flex flex-col  gap-2 w-full">
        <div className="font-bold text-right">{item.name}</div>
        <div className=" font-extralight text-sm text-right sm:hidden">
          {item.description}
        </div>
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row gap-2">
            {item.price.toLocaleString("fa-IR")} <span>تومان</span>{" "}
          </div>
          <div className="flex flex-row gap-2 items-center">
            {itemIsAdded && itemsSelector.length > 0 ? (
              <div className="flex flex-row gap-2 items-center">
                <button
                  onClick={decrementButtonHandler}
                  style={{ backgroundImage: 'url("/cloud.svg")' }}
                  className="pb-5 w-9 h-9 object-contain bg-no-repeat bg-center z-3 text-3xl font-extralight text-center align-middle"
                >
                  -
                </button>
                {currentItemSelector.quantity.toLocaleString("fa-IR")}
              </div>
            ) : (
              ""
            )}
            <button
              onClick={incrementButtosnHandler}
              style={{ backgroundImage: 'url("/cloud.svg")' }}
              className="pb-1 w-10 h-10 object-contain bg-no-repeat bg-center z-3 text-2xl font-extralight text-center align-middle"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachItem;
