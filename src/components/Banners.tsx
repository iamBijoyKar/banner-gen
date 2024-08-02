"use client";

// Libraries import
import { useState } from "react";

// Data import
import data from "@/data/banner-data.json";

// Components import
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import BannerImageComp from "@/components/BannerImageComp";

export default function Banners() {
  const [isEdit, setIsEdit] = useState(false);
  const [editBannerId, setEditBannerId] = useState<number | string>(0);

  // Function to open the edit dialog
  const openEdit = (id: number | string) => {
    setIsEdit(true);
    setEditBannerId(id);
    // console.log(id);
  };

  // Function to close the edit dialog
  const closeEdit = () => {
    setIsEdit(false);
    setEditBannerId(0);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 my-12">
        {data.map((item) => (
          <BannerImageComp key={item.id} openEdit={openEdit} data={item} />
        ))}
      </div>
      <dialog
        open={isEdit}
        className="fixed inset-0 z-50 backdrop:backdrop-blur-lg backdrop:bg-slate-100/50 bg-white"
      >
        <EditBannerTemplateBs
          editBannerId={editBannerId}
          closeEdit={closeEdit}
          data={data}
        />
      </dialog>
    </div>
  );
}
