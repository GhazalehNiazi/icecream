import React from "react";
import Image from "next/image";
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
  return (
    <div key={item.id} className="m-3 border border-gray-300 rounded-lg w-72">
      <Image alt={item.name} src={item.img} width={300} height={300} className='rounded-lg'/>
      <div className="p-2 flex flex-col items-end gap-2">
        <div className="font-bold text-right">{item.name}</div>
        <div className="text-end font-extralight text-sm text-right">
          {item.description}
        </div>
        <div className="flex flex-row-reverse gap-2">
          {item.price} <span>تومان</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default EachItem;
