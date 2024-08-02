// Libraries import
import Image from "next/image";
import { forwardRef } from "react";

// Types
import type { BannerData } from "@/types";

type Temp1Props = {
  data: BannerData;
  hoverEffect?: boolean;
  preview?: boolean;
};

function Temp1(
  { data, hoverEffect = true, preview = true }: Temp1Props,
  ref: any
) {
  return (
    <div
      ref={ref}
      className="relative w-[300px] h-[500px] overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent z-10"></div>
      {preview ? (
        <Image
          src={data.image.src}
          alt={data.title?.text}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${
            hoverEffect ? "group-hover:scale-105" : ""
          } transform transition-transform duration-300 ease-in-out z-0`}
        />
      ) : (
        <img
          src={data.image.src}
          alt={data.title?.text}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${
            hoverEffect ? "group-hover:scale-105" : ""
          } transform transition-transform duration-300 ease-in-out z-0 w-full h-full object-cover`}
        />
      )}
      {data.title && (
        <div
          className="absolute z-40"
          style={{
            top: data.title.position.y,
            left: data.title.position.x,
            color: data.title.style.color,
            fontSize: data.title.style.fontSize,
            fontWeight: data.title.style?.fontWeight,
          }}
        >
          <span>{data.title.text}</span>
        </div>
      )}
      {data.description && (
        <div
          className="absolute z-40"
          style={{
            top: data.description.position.y,
            left: data.description.position.x,
            color: data.description.style.color,
            fontSize: data.description.style.fontSize,
            fontWeight: data.description.style?.fontWeight,
          }}
        >
          <span>{data.description.text}</span>
        </div>
      )}
      {data.btn && (
        <div
          className="absolute z-40"
          style={{
            top: data.btn.position.y,
            left: data.btn.position.x,
            color: data.btn.style.color,
            fontSize: data.btn.style.fontSize,
            backgroundColor: data.btn.style.backgroundColor,
            borderRadius: data.btn.style.borderRadius,
            padding: data.btn.style.padding,
          }}
        >
          <button className=" cursor-default ">{data.btn.text}</button>
        </div>
      )}
    </div>
  );
}

export default forwardRef(Temp1);
