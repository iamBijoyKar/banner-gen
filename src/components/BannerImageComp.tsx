"use client";

// Libraries import
import { lazy, Suspense, useState, useMemo, useEffect } from "react";
import { MdEdit } from "react-icons/md";

// Components import
import Temp1 from "./templates/Temp1";
import Temp2 from "./templates/Temp2";
import Temp3 from "./templates/Temp3";

// Types
import type { BannerData } from "@/types";

// Extending the BannerData type with toggleEdit function
type BannerImageCompProps = {
  data: BannerData;
  key: string | number;
  openEdit: (id: number | string) => void;
};

export default function BannerImageComp({
  data,
  key,
  openEdit,
}: BannerImageCompProps) {
  let Template;
  if (data.template === "template1") {
    Template = Temp1;
  } else if (data.template === "template2") {
    Template = Temp2;
  } else {
    Template = Temp3;
  }

  // const [isMounted, setIsMounted] = useState(false);
  // Lazy Load the Template based on the data.template
  // if (!isMounted) {
  //   if (data.template === "template1") {
  //     Template = lazy(() => import("./templates/Temp1"));
  //   } else {
  //     Template = lazy(() => import("./templates/Temp1"));
  //   }
  // }

  // useEffect(() => {
  //   setIsMounted(true);
  //   return () => setIsMounted(false);
  // }, []);

  return (
    <div key={key} className="relative w-[300px] rounded overflow-hidden">
      <button
        onClick={() => openEdit(data.id)}
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
