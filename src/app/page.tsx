import data from "@/data/banner-data.json";
import BannerImageComp from "@/components/BannerImageComp";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[300px] sm:w-[600px] md:w-[610px] lg:w-[930px] h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 my-12">
          {data.map((item) => (
            <BannerImageComp data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
