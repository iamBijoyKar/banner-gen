"use client";

// Libraries import
import { useEffect, useState, useRef } from "react";
import domtoimage from "dom-to-image";
import Image from "next/image";
// Components import
import Temp1 from "./templates/Temp1";
import Temp2 from "./templates/Temp2";
import Temp3 from "./templates/Temp3";

// Assets import
import loadingSvg from "@/assets/loading.svg";

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
  let Temp: any;

  const [bannerData, setBannerData] = useState<BannerData>(bannerToBeEdited!); // trust me it will be there
  const [downloadLoading, setDownloadLoading] = useState(false);

  const templateRef = useRef<HTMLDivElement>(null);

  // Function to update custom image
  const onImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setBannerData({
        ...bannerData,
        image: {
          ...bannerData.image,
          src: e.target?.result as string,
        },
      });
    };
    reader.readAsDataURL(file);
  };

  // Function to download the banner
  const downloadBanner = () => {
    setDownloadLoading(true);
    if (templateRef.current) {
      domtoimage
        .toPng(templateRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "banner.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error("oops, something went wrong!", error);
        });
    }
    setTimeout(() => {
      setDownloadLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setBannerData(bannerToBeEdited!); // trust me it will be there
  }, [editBannerId]);

  if (!bannerData) {
    return <div>No data found</div>;
  }

  // Selecting the template
  if (bannerData.template && bannerData.template === "template1") {
    Temp = Temp1;
  } else if (bannerData.template && bannerData.template === "template2") {
    Temp = Temp2;
  } else {
    Temp = Temp3;
  }

  return (
    <div className="p-4 w-[90vw] sm:w-[70vw] md:w-[80vw] lg:w-[900px] rounded ">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="w-[300px] flex justify-center">
          <Temp
            data={bannerData}
            hoverEffect={false}
            ref={templateRef}
            preview={false}
          />
        </div>
        <div className="flex flex-col md:w-1/2 ">
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
            <div className="flex gap-2 justify-between">
              <label
                htmlFor=""
                className="text-sm flex items-center gap-2 w-fit"
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
                className="text-sm flex items-center gap-2 w-fit"
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
                className="text-sm flex items-center gap-2 w-fit"
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
            <div className="flex gap-2 justify-between">
              <label
                htmlFor=""
                className="text-sm flex items-center gap-2 w-fit"
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
                className="text-sm flex items-center gap-2 w-fit"
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
                className="text-sm flex items-center gap-2 w-fit"
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
          <hr className=" h-1 my-2" />
          <div className="flex gap-2 justify-between">
            <label htmlFor="" className="text-sm w-full items-center">
              <span className="text-lg">Image</span>
              <input
                onInput={onImageInput}
                type="file"
                name=""
                id=""
                className="w-full text-sm border px-2 py-1 rounded"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-3 items-center ">
        <button
          onClick={downloadBanner}
          className="bg-green-500 text-white w-[120px] h-10 px-4 py-2 rounded flex justify-center items-center gap-2 hover:bg-green-600 active:translate-y-1 active:shadow-inner"
        >
          {downloadLoading ? (
            <Image
              src={loadingSvg}
              alt="loading"
              className=""
              width={27}
              height={27}
            />
          ) : (
            "Download"
          )}
        </button>
        <button
          onClick={closeEdit}
          className="bg-gray-500 hover:bg-gray-600 active:translate-y-1 active:shadow-inner text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
