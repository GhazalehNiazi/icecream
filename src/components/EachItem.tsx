import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add_item, remove_item } from "@/store/features/cartSlice";
import { useSelector } from "react-redux";
import clsx from "clsx";
function EachItem({
  item,
}: {
  item: {
    name: string;
    id: string;
    description: string;
    price: number;
    img: string;
  };
}) {
  interface item {
    name: string;
    id: string;
    description: string;
    price: number;
    img: string;
    quntity: number;
  }

  const dispatch = useDispatch();
  const itemsSelector = useSelector(
    (state: { cart: { items: item[]; total: number } }) => state.cart.items
  );
  const choosedItem = itemsSelector.find((i) => i.id === item.id);
  console.log(itemsSelector);

  const [itemIsAdded, setItemIsAdded] = useState(false);
  const [itemIndex, setItemIndex] = useState(-1);

  const incrementButtosnHandler = () => {
    dispatch(add_item(item));
    setItemIsAdded(true);
  };

  const decrementButtonHandler = () => {
    if (choosedItem.quntity > 1) {
      dispatch(remove_item(item));
    } else if (choosedItem.quntity === 1) {
      dispatch(remove_item(item));
      setItemIsAdded(false);
    }
  };

  return (
    <div
      key={item.id}
      className={clsx(
        "m-3 border border-gray-300 rounded-lg flex flex-col items-center ",
        itemIsAdded ? "border-cyan-500" : ""
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
            {item.price} <span>تومان</span>{" "}
          </div>
          <div className="flex flex-row gap-2 items-center">
            {itemIsAdded ? (
              <div className="flex flex-row gap-2 items-center">
                <button
                  onClick={decrementButtonHandler}
                  style={{ backgroundImage: 'url("/cloud.svg")' }}
                  className="w-9 h-9 object-contain bg-no-repeat bg-center z-3 text-3xl font-extralight text-center align-middle"
                >
                  -
                </button>
                {choosedItem.quntity}
              </div>
            ) : (
              ""
            )}
            <button
              onClick={incrementButtosnHandler}
              style={{ backgroundImage: 'url("/cloud.svg")' }}
              className="w-9 h-9 object-contain bg-no-repeat bg-center z-3 text-3xl font-extralight text-center align-middle"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachItem;
