"use client";

// Libraries import
import { useState, useRef, useEffect } from "react";

// Data import
import data from "@/data/banner-data.json";

// Components import
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import BannerImageComp from "@/components/BannerImageComp";

export default function Banners() {
  const [isEdit, setIsEdit] = useState(false);
  const [editBannerId, setEditBannerId] = useState<number | string>(0);

  const dialogRef = useRef<HTMLDialogElement>(null);

  // Function to open the edit dialog
  const openEdit = (id: number | string) => {
    setIsEdit(true);
    setEditBannerId(id);
    dialogRef.current?.showModal();
  };

  // Function to close the edit dialog
  const closeEdit = () => {
    setIsEdit(false);
    setEditBannerId(0);
    dialogRef.current?.close();
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeEdit();
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target === dialogRef.current) {
        closeEdit();
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeEdit();
        }
      });
      window.removeEventListener("click", (e) => {
        if (e.target === dialogRef.current) {
          closeEdit();
        }
      });
    };
  }, [isEdit]);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 my-12">
        {data.map((item) => (
          <BannerImageComp key={item.id} openEdit={openEdit} data={item} />
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="z-50 rounded backdrop:backdrop-blur-lg backdrop:w-screen backdrop:h-screen backdrop:bg-slate-600/50 bg-white"
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
