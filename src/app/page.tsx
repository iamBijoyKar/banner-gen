// Libraries Import
import Link from "next/link";

// Components Import
import Banners from "@/components/Banners";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[300px] sm:w-[600px] md:w-[650px] lg:w-[970px] h-full">
        <Link href="/">
          <h1 className="text-3xl font-bold mt-4">BannerGen</h1>
        </Link>
        <Banners />
      </div>
    </div>
  );
}
