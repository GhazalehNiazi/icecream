"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Order from "./Order";
import Rules from "./Rules";

function OrderOrRules() {
  const activeClassNames =
    "bg-white border-x border-t border-gray-300 rounded-t-md";
  const deactiveClassNames = "border-b border-gray-300";

  const [orderActive, setOrderActive] = useState(true);

  const orderClickHandler = () => {
    setOrderActive(true);
  };
  const rulesClickHandler = () => {
    setOrderActive(false);
  };

  return (
    <div>
      <nav className={clsx("flex justify-center w-full  pt-6 pb-3 text-center")}>
        <div
          onClick={orderClickHandler}
          className={clsx(
            "p-3 basis-1/2 ",
            orderActive ? activeClassNames : deactiveClassNames
          )}
        >
          اطلاعات مجموعه
        </div>
        <div
          onClick={rulesClickHandler}
          className={clsx(
            "p-3 basis-1/2 ",
            !orderActive ? activeClassNames : deactiveClassNames
          )}
        >
          منوی سفارش
        </div>
      </nav>
      <div>{orderActive ? <Order /> : <Rules />}</div>
    </div>
  );
}

export default OrderOrRules;
