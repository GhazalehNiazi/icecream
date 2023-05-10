import clsx from "clsx";
import React from "react";
import items from "../data/items.json";
import Image from "next/image";
import EachItem from "./EachItem";
import categories from "../data/category.json";
function Order() {
  interface itemsType {
    name: string;
    id: string;
    description: string;
    price: number;
    img: string;
    cat: string;
  }
  interface categoryType {
    name: string;
    id: string;
    img: string;
  }

  const categoriesData: categoryType[] = categories.data;
  const itemsData: itemsType[] = items.data;

  return (
    <div className="scroll-smooth">
      <div className="bg-gray-50  h-[6rem] pt-2 flex flex-row-reverse content-center overflow-scroll text-sm text-center w-full border-b border-gray-200 sticky top-0">
        {categoriesData.map((category: categoryType) => (
          <a
            href={`#${category.id}`}
            key={category.id}
            className="px-2 flex flex-col justify-center items-center gap-2"
          >
            <div
              className={`basis-1/2 w-12 h-12  bg-center bg-contain bg-no-repeat z-2 `}
              style={{ backgroundImage: `url('${category.img}')` }}
            ></div>
            <div className="basis-1/2 w-24 break-keep text-sm leading-none">{category.name}</div>
          </a>
        ))}
      </div>

      {categoriesData.map((category) => (
        <div key={category.id} id={category.id}>
          <div  className="flex flex-col items-center">
            <div className="text-right text-2xl font-bold text-gray-500 px-10 py-2 self-end">
              {category.name}
            </div>
            {itemsData.map(
              (icecream) =>
                icecream.cat === category.id && (
                  <EachItem key={icecream.id} item={icecream} />
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
