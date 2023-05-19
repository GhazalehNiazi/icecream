"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Order from "./Order";
import Info from "./Info";

function OrderOrRules({ cartFullSize }: { cartFullSize: boolean }) {
  const activeClassNames =
    "bg-white border-x border-t border-gray-300 rounded-t-md";
  const deactiveClassNames = "border-b border-gray-300";

  const [orderIsActive, setOrderIsActive] = useState(true);

  const orderClickHandler = () => {
    setOrderIsActive(true);
  };
  const infoClickHandler = () => {
    setOrderIsActive(false);
  };

  return (
    <div className="lg:basis-2/3 lg:w-8/12">
      <nav
        className={clsx("flex  justify-center w-full  pb-3 lg:pb-0 text-center")}
      >
        <div
          onClick={infoClickHandler}
          className={clsx(
            "p-3 basis-1/2 ",
            orderIsActive ? deactiveClassNames : activeClassNames
          )}
        >
          اطلاعات مجموعه
        </div>
        <div
          onClick={orderClickHandler}
          className={clsx(
            "p-3 basis-1/2 ",
            orderIsActive ? activeClassNames : deactiveClassNames
          )}
        >
          منوی سفارش
        </div>
      </nav>
      <div className="lg:border">{orderIsActive ? <Order /> : <Info />}</div>
    </div>
  );
}

export default OrderOrRules;
