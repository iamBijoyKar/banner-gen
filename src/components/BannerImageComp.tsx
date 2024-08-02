"use client";

// Libraries import
import { lazy, Suspense } from "react";
import { MdEdit } from "react-icons/md";

// Components import

// Types
import type { BannerData as BannerImageCompProps } from "@/types";

export default function BannerImageComp({
  data,
}: {
  data: BannerImageCompProps;
}) {
  //   console.log(data);

  let Template: any;

  if (data.template === "Temp1") {
    Template = lazy(() => import("./templates/Temp1"));
  } else {
    Template = lazy(() => import("./templates/Temp1"));
  }

  return (
    <div key={data.id} className="relative w-[300px] rounded overflow-hidden">
      <button
        type="button"
        className="flex justify-center items-center absolute top-2 right-2 w-8 h-8 rounded-full hover:bg-slate-300/50 z-50"
      >
        <MdEdit className="text-xl text-white " />
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        <Template data={data} />
      </Suspense>
    </div>
  );
}
