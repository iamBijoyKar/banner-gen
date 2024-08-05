"use client";

// Libraries import
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

// Data import
import data from "@/data/banner-data.json";

// Components import
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import BannerImageComp from "@/components/BannerImageComp";

export default function Banners() {
  const [isEdit, setIsEdit] = useState(false);
  const [bannresData, setBannersData] = useState(data);
  const [editBannerId, setEditBannerId] = useState<number | string>(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const editDialogRef = useRef<HTMLDialogElement>(null);
  const searchDialogRef = useRef<HTMLDialogElement>(null);

  // Function to open the edit dialog
  const openEdit = (id: number | string) => {
    setIsEdit(true);
    setEditBannerId(id);
    editDialogRef.current?.showModal();
  };

  // Function to close the edit dialog
  const closeEdit = () => {
    setIsEdit(false);
    setEditBannerId(0);
    editDialogRef.current?.close();
  };

  // Function to open the search dialog
  const openSearch = () => {
    setIsSearchOpen(true);
    searchDialogRef.current?.showModal();
  };

  // Function to close the search dialog
  const closeSearch = () => {
    setIsSearchOpen(false);
    searchDialogRef.current?.close();
  };

  // Function to search the banners
  const searchBanners = () => {
    if (searchValue) {
      const searchResults = data.filter(
        (item) =>
          item.title?.text.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description?.text
            .toLowerCase()
            .includes(searchValue.toLowerCase())
      );
      setBannersData(searchResults);
      closeSearch();
      return searchResults;
    }
    setBannersData(data);
    closeSearch();
    return data;
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeEdit();
      }
    });
    window.addEventListener("click", (e) => {
      if (e.target === editDialogRef.current) {
        closeEdit();
      }
      if (e.target === searchDialogRef.current) {
        closeSearch();
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeEdit();
        }
      });
      window.removeEventListener("click", (e) => {
        if (e.target === editDialogRef.current) {
          closeEdit();
        }
      });
    };
  }, [isEdit]);

  return (
    <div className="flex relative">
      {searchValue.trim() && !isSearchOpen && (
        <div className="absolute top-0 left-[40%] italic">
          <h3>Search Results for "{searchValue}"</h3>
        </div>
      )}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 my-12">
        {bannresData.map((item) => (
          <BannerImageComp key={item.id} openEdit={openEdit} data={item} />
        ))}
      </div>
      <div className="fixed bottom-10 right-4 sm:static sm:flex justify-center w-14 z-40 mt-12">
        <button
          onClick={openSearch}
          className="sticky top-10 flex items-center justify-center w-10 h-10 bg-slate-600/50 rounded hover:bg-slate-600/70"
        >
          <FaSearch className="text-white text-xl" />
        </button>
      </div>
      <dialog
        ref={editDialogRef}
        className="z-50 rounded backdrop:backdrop-blur-lg backdrop:w-screen backdrop:h-screen backdrop:bg-slate-600/50 bg-white"
      >
        <EditBannerTemplateBs
          editBannerId={editBannerId}
          closeEdit={closeEdit}
          data={data}
        />
      </dialog>
      <dialog
        ref={searchDialogRef}
        className="z-50 w-[90vw] md:w-[600px] lg:w-[920px] bg-transparent relative -top-[250px] m-auto"
        id="search-modal"
      >
        <form
          action={searchBanners}
          className="flex items-center justify-center w-full h-full"
        >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 border-2 rounded-lg outline-none border-slate-600"
          />
          <button
            type="submit"
            className="ml-1 w-10 h-10 flex justify-center items-center bg-slate-600/50 rounded hover:bg-slate-600/70"
          >
            <FaSearch className="text-white text-xl" />
          </button>
        </form>
      </dialog>
    </div>
  );
}
