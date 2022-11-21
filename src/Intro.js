import React from "react";
import "./App.css";

function Foot() {
  return (
    <div className="h-screen w-screen m-auto grid grid-cols-2 bg-custom-yellow items-center scroll-smooth hover:scroll-auto">
      <div className="bg-[url('./assets/himatekkomgang.jpg')] sepia-[.7] bg-cover bg-no-repeat h-full "></div>
      <div className="flex flex-col text-start mx-12">
        <a className="font-bold text-[48px]">
          HIMPUNAN MAHASISWA TEKNIK KOMPUTER ITS
        </a>
        <a className="text-justify mt-4 mb-16">
          Mewujudkan HIMATEKKOM ITS yang kreatif dan inovatif dalam berkarya
          dengan berlandaskan Ketuhanan Yang Maha Esa serta menjadi wadah
          pemersatu seluruh civitas akademika Teknik Komputer ITS untuk
          berkontribusi nyata dalam kemajuan bangsa.
        </a>
      </div>
    </div>
  );
}

export default Foot;
