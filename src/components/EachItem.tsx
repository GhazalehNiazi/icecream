import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { add_item } from "@/store/features/cartSlice";
import { useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const buttonHandler = () => {
    console.log("clicker");
    console.log(selector);
    dispatch(add_item(item));
    console.log(selector);
  };

  return (
    <div key={item.id} className="m-3 border border-gray-300 rounded-lg w-72">
      <Image
        priority
        alt={item.name}
        src={item.img}
        width={300}
        height={300}
        className="rounded-t-lg"
      />
      <div className="p-2 flex flex-col items-end gap-2">
        <div className="font-bold text-right">{item.name}</div>
        <div className="text-end font-extralight text-sm text-right">
          {item.description}
        </div>
        <div className="flex flex-row-reverse w-full items-center justify-between">
          <div className="flex flex-row-reverse gap-2">
            {item.price} <span>تومان</span>{" "}
          </div>
          <button
            onClick={buttonHandler}
            style={{ backgroundImage: 'url("/cloud.svg")' }}
            className="w-9 h-9 object-contain bg-no-repeat bg-center z-3 text-3xl font-extralight text-center align-middle"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachItem;
