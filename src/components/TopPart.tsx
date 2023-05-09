import React from "react";
import SwiperHero from "@/components/SwiperHero";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function TopPart() {
  return (
    <div className=" px-3 py-2">
      <div className=" w-full min-h-max  flex flex-col gap-8">
        <SwiperHero />
        <div className="flex items-center gap-4 place-content-end">
          سفارش می‌پذیریم
          <span className="mr-2 w-2 h-2 bg-green-400 rounded-lg outline outline-green-400 outline-offset-1 animate-ping"></span>
        </div>
        <div className="bg-white  border rounded-md px-5 py-2 border-gray-200 flex flex-col items-center justify-center gap-1">
          <div className="font-bold">میانگین زمان تحویل</div>
          <div className="flex justify-between w-full text-sm">
            <div className="font-extralight flex gap-0.5">
              <span>غیرفعال </span>
              <ExclamationTriangleIcon width={15} className="text-orange-500" />
              <span>ارسال با پیک</span>
            </div>
            <div className="font-extralight ">
              <span>حضوری</span> <span>تا 15 دقیقه </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPart;
