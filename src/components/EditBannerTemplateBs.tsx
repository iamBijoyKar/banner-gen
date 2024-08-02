"use client";

// Libraries import
import { useEffect, useState } from "react";

// Components import
import Temp1 from "./templates/Temp1";

// Types
import type { BannerData } from "@/types";

type EditBannerTemplateBsProps = {
  data: BannerData[];
  editBannerId: number | string;
  closeEdit: () => void;
};

export default function EditBannerTemplateBs({
  data,
  editBannerId,
  closeEdit,
}: EditBannerTemplateBsProps) {
  const bannerToBeEdited = data.find((item) => item.id === editBannerId);

  if (!bannerToBeEdited) {
    return <div>No data found</div>;
  }

  const [bannerData, setBannerData] = useState<BannerData>(bannerToBeEdited);

  useEffect(() => {
    setBannerData(bannerToBeEdited);
  }, [editBannerId]);

  return (
    <div className="p-4 w-[50vw] rounded ">
      <div className="flex gap-4">
        <div className="w-[300px]">
          <Temp1 data={bannerData} />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-md">
              Title
              <textarea
                onChange={(e) =>
                  setBannerData({
                    ...bannerData,
                    title: { ...bannerData.title, text: e.target.value },
                  })
                }
                name=""
                id=""
                maxLength={50}
                className="w-full text-sm border px-2 py-1 rounded"
                value={bannerData.title.text}
              ></textarea>
              <div className="w-full -mt-2 text-[10px] text-right">
                {bannerData.title.text.length}/50
              </div>
            </label>
            <div className="flex gap-2">
              <label
                htmlFor=""
                className="text-sm w-1/2 flex items-center gap-2"
              >
                <span className="text-sm">Size</span>
                <div className="relative">
                  <input
                    onChange={(e) =>
                      setBannerData({
                        ...bannerData,
                        title: {
                          ...bannerData.title,
                          style: {
                            ...bannerData.title.style,
                            fontSize:
                              e.target.value.replace(/[^0-9]/g, "") + "px",
                          },
                        },
                      })
                    }
                    min={10}
                    max={50}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name=""
                    id=""
                    className="w-14 border px-2 py-1 rounded text-sm relative"
                    value={bannerData.title.style.fontSize.replace("px", "")}
                  />
                  <span className="absolute top-1 right-2">px</span>
                </div>
              </label>
              <label
                htmlFor=""
                className="text-sm w-1/2 flex items-center gap-2"
              >
                <span className="text-sm">Weight</span>
                <select
                  onChange={(e) =>
                    setBannerData({
                      ...bannerData,
                      title: {
                        ...bannerData.title,
                        style: {
                          ...bannerData.title.style,
                          fontWeight: e.target.value,
                        },
                      },
                    })
                  }
                  name=""
                  id=""
                  className="w-20 text-sm border px-0 py-1 rounded"
                  value={bannerData.title.style.fontWeight}
                >
                  <option value="normal">Normal</option>
                  <option value="900">Bolder</option>
                  <option value="bold">Bold</option>
                  <option value="600">Semibold</option>
                  <option value="500">Medium</option>
                </select>
              </label>
              <label
                htmlFor=""
                className="text-sm w-1/2 flex items-center gap-2"
              >
                <span className="text-sm">Color</span>
                <input
                  type="color"
                  onChange={(e) =>
                    setBannerData({
                      ...bannerData,
                      title: {
                        ...bannerData.title,
                        style: {
                          ...bannerData.title.style,
                          color: e.target.value,
                        },
                      },
                    })
                  }
                  name=""
                  id=""
                  className="w-10 border px-1 py-1 rounded"
                  value={bannerData.title.style.color}
                />
              </label>
            </div>
          </div>
          <hr className=" h-1 my-3" />
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-md">
              Description
              <textarea
                onChange={(e) =>
                  setBannerData({
                    ...bannerData,
                    description: {
                      ...bannerData.description,
                      text: e.target.value,
                    },
                  })
                }
                rows={4}
                name=""
                id=""
                maxLength={150}
                className="w-full text-sm border px-2 py-1 rounded"
                value={bannerData.description.text}
              ></textarea>
              <div className="w-full -mt-2 text-[10px] text-right">
                {bannerData.description.text.length}/150
              </div>
            </label>
            <div className="flex gap-2">
              <label
                htmlFor=""
                className="text-sm w-1/2 flex items-center gap-2"
              >
                <span className="text-sm">Size</span>
                <div className="relative">
                  <input
                    onChange={(e) =>
                      setBannerData({
                        ...bannerData,
                        description: {
                          ...bannerData.description,
                          style: {
                            ...bannerData.description.style,
                            fontSize:
                              e.target.value.replace(/[^0-9]/g, "") + "px",
                          },
                        },
                      })
                    }
                    min={10}
                    max={50}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name=""
                    id=""
                    className="w-14 border px-2 py-1 rounded text-sm relative"
                    value={bannerData.description.style.fontSize.replace(
                      "px",
                      ""
                    )}
                  />
                  <span className="absolute top-1 right-2">px</span>
                </div>
              </label>
              <label
                htmlFor=""
                className="text-sm w-1/2 flex items-center gap-2"
              >
                <span className="text-sm">Weight</span>
                <select
                  onChange={(e) =>
                    setBannerData({
                      ...bannerData,
                      description: {
                        ...bannerData.description,
                        style: {
                          ...bannerData.description.style,
                          fontWeight: e.target.value,
                        },
                      },
                    })
                  }
                  name=""
                  id=""
                  className="w-20 text-sm border px-0 py-1 rounded"
                  value={bannerData.description.style.fontWeight}
                >
                  <option value="normal">Normal</option>
                  <option value="900">Bolder</option>
                  <option value="bold">Bold</option>
                  <option value="600">Semibold</option>
                  <option value="500">Medium</option>
                </select>
              </label>
              <label
                htmlFor=""
                className="text-sm w-1/2 flex items-center gap-2"
              >
                <span className="text-sm">Color</span>
                <input
                  type="color"
                  onChange={(e) =>
                    setBannerData({
                      ...bannerData,
                      description: {
                        ...bannerData.description,
                        style: {
                          ...bannerData.description.style,
                          color: e.target.value,
                        },
                      },
                    })
                  }
                  name=""
                  id=""
                  className="w-10 border px-1 py-1 rounded"
                  value={bannerData.description.style.color}
                />
              </label>
            </div>
          </div>
          <hr className=" h-1 my-3" />
          {bannerData.btn && (
            <div className="">
              <label htmlFor="" className="text-md">
                Button
                <input
                  onChange={(e) =>
                    setBannerData({
                      ...bannerData,
                      btn: { ...bannerData.btn, text: e.target.value },
                    })
                  }
                  maxLength={20}
                  type="text"
                  name=""
                  id=""
                  className="w-full text-sm border px-2 py-1 rounded"
                  value={bannerData.btn.text}
                />
                <div className="w-full mt-0 text-[10px] text-right">
                  {bannerData.btn.text.length}/20
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 flex gap-3 items-center ">
        <button
          onClick={closeEdit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Download
        </button>
        <button
          onClick={closeEdit}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
