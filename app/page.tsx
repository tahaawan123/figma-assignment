import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="[h-80%] flex">
        <div className="w-1/2 flex flex-col justify-center items-start m-14 ">
          <h1 className="text-[40px] font-bold w-[496px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[30px] font-medium w-[600px] h-[147px] text-[#787054]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="font-medium text-[30px] text-white bg-[#A29875] w-[288px] h-[58px] p-[10px] rounded-[10px] ">
            Explore Now
          </button>
        </div>

        <div className="w-1/2 mt-12">
          <Image src={"/image.jpg"} alt="image" width={442} height={611} />
        </div>
      </div>
    </div>
  );
}

export default Home;
