"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Order from "./Order";
import Info from "./Info";

function OrderOrRules() {
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
    <div>
      <nav
        className={clsx("flex justify-center w-full  pt-6 pb-3 text-center")}
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
      <div>{orderIsActive ? <Order /> : <Info />}</div>
    </div>
  );
}

export default OrderOrRules;
