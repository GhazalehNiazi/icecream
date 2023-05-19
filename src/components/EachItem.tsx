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

  const buttonHandler = () => {
    dispatch(add_item(item));
  };

  return (
    <div
      key={item.id}
      className="m-3 border border-gray-300 rounded-lg flex flex-col items-center "
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
