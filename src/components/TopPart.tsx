import React from "react";
import SwiperHero from "@/components/SwiperHero";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function TopPart() {
  return (
    <div className=" px-3 py-2">
      <div className=" w-full min-h-max flex flex-col gap-8">
        <SwiperHero />
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="flex items-center gap-4 ">
            <span className="mr-2 w-2 h-2 bg-green-400 rounded-lg outline outline-green-400 outline-offset-1 animate-ping"></span>
            سفارش می‌پذیریم
          </div>
          <div className="bg-white  border rounded-md px-5 py-2 border-gray-200 flex flex-col items-center justify-center gap-1 md:items-start md:px-7 md:py-2 md:w-max">
            <div className="font-bold">میانگین زمان تحویل</div>
            <div className="flex justify-between w-full text-sm md:flex-col ">
              <div className="font-extralight md:flex md:gap-9  ">
                <span className="md:basis-1/3">حضوری</span>{" "}
                <span className="md:basis-1/2 md:break-keep">تا 15 دقیقه </span>
              </div>
              <div className="font-extralight flex gap-0.5  md:gap-4">
                <span className="">ارسال با پیک</span>
                <div className="flex  ">
                  <ExclamationTriangleIcon
                    width={15}
                    className="text-orange-500"
                  />
                  <span>غیرفعال </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPart;
