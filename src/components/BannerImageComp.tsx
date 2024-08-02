"use client";

// Libraries import
import Image from "next/image";
import { MdEdit } from "react-icons/md";

// Types
type BannerImageCompProps = {
  id: number;
  title: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    style: {
      color: string;
      fontSize: string;
      fontWeight?: string;
    };
  };
  description: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    style: {
      color: string;
      fontSize: string;
      fontWeight?: string;
    };
  };
  btn?: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    style: {
      color: string;
      fontSize: string;
      fontWeight?: string;
      backgroundColor: string;
      borderRadius?: string;
      padding?: string;
    };
  };
  image: {
    src: string;
    type: "square" | "rectangle" | string;
    dimensions: {
      width: number;
      height: number;
    };
  };
};

export default function BannerImageComp({
  data,
}: {
  data: BannerImageCompProps;
}) {
  //   console.log(data);
  return (
    <div key={data.id} className="relative w-[300px] rounded overflow-hidden">
      <button
        type="button"
        className="flex justify-center items-center absolute top-2 right-2 w-8 h-8 rounded-full hover:bg-slate-300/50 z-50"
      >
        <MdEdit className="text-xl text-white " />
      </button>
      <div className="w-full min-h-[500px] overflow-hidden">
        <Image
          src={data.image.src}
          alt={data.title.text}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hover:scale-105 transform transition-transform duration-300 ease-in-out"
        />
      </div>
      {data.title !== undefined ? (
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
          <span className="">{data.title.text}</span>
        </div>
      ) : null}
      {data.description !== undefined ? (
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
          <span className="">{data.description.text}</span>
        </div>
      ) : null}

      {data.btn !== undefined ? (
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
          <button className="">{data.btn.text}</button>
        </div>
      ) : null}
    </div>
  );
}
