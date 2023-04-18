import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            Tafel Klaar
          </a>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                Log in
              </button>
              <button className="text-black border p-1 px-4 rounded">
                Log uit
              </button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        {/* HEADER RESTAURANT PAGE */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#3766df] to-[#41517e] h-full flex justify-center items-center">
            <h1 className="md:text-7xl text-1xl text-white capitalize text-shadow text-center">
              'T Populierenhof (Hulste)
            </h1>
          </div>
        </div>
        {/* HEADER RESTAURANT PAGE */}
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2 text-black font-bold">
              <a href="" className="mr-7">
                Overzicht
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* RESTAURANT NAVBAR */}
            {/* TITLE */}
            <div className="mt-4 border-b pb-6 text-black">
              <h1 className="font-bold md:text-6xl text-1xl">'T Populierenhof</h1>
            </div>
            {/* TITLE */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
