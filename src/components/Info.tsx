import React from "react";

function Info() {
  return (
    <div className="px-3 flex flex-col items-center content-center gap-10">
      <div className="flex flex-col items-center content-center gap-2">
        <div className="text-cyan-500 font-bold text-xl ">سرویس‌دهی آنلاین</div>
        <table className="border-collapse border-b border-slate-500 text-right table-auto">
          <tbody>
            <tr className="border-b border-slate-500 ">
              <td>
                <span>11:00 - 23:59</span>
              </td>
              <td>
                <span>شنبه تا پنجشنبه</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>13:00 - 23:59</span>
              </td>
              <td>
                <span>جمعه</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center content-center gap-2">
        <div className="text-cyan-500 font-bold text-xl ">آدرس مجموعه</div>
        <address className="text-center">
          شهرک غرب، بلوار دادمان غربی، خیابان فخارمقدم، پلاک 9
        </address>
        <div>
          {" "}
          تلفن:
          <a href="tel:09101714231"> 09101714231</a>
        </div>
      </div>
    </div>
  );
}

export default Info;
