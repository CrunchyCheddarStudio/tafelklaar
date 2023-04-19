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
              <h1 className="font-bold md:text-6xl text-1xl">
                'T Populierenhof
              </h1>
            </div>
            {/* TITLE */}
            {/* RATINGS */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p className="text-black">*****</p>
                <p className="text-reg ml-3 text-black">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4 text-black">600 Recensies</p>
              </div>
            </div>
            {/* RATINGS */}
            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light text-black">
                Restaurant Populierenhof bestaat sinds 1988 en serveert een
                Franse keuken in een gezellig kader. Laat je inspireren door het
                vernieuwde interieur & laat je omverblazen door onze verfijnde
                gerechten. Een rustgevende sfeer van lunch in de week tot diner
                in het weekend.
              </p>
            </div>
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 text-black border-b pb-5">
                5 Foto's
              </h1>
              <div className="flex flex-wrap">
                <img className="w-56 h-44 mr-1 mb-1" src="https://media-cdn.tripadvisor.com/media/photo-s/10/11/73/dd/photo0jpg.jpg" alt="" />
                <img className="w-56 h-44 mr-1 mb-1" src="https://media-cdn.tripadvisor.com/media/photo-s/0b/d2/d6/dc/photo1jpg.jpg" alt="" />
                <img className="w-56 h-44 mr-1 mb-1" src="https://media-cdn.tripadvisor.com/media/photo-s/13/d1/eb/68/t-populierenhof.jpg" alt="" />
                <img className="w-56 h-44 mr-1 mb-1" src="https://media-cdn.tripadvisor.com/media/photo-l/0f/5b/1d/72/koude-visschotel-en-schotel.jpg" alt="" />
                <img className="w-56 h-44 mr-1 mb-1" src="https://media-cdn.tripadvisor.com/media/photo-s/13/d1/eb/66/t-populierenhof.jpg" alt="" />
              </div>
            </div>
            {/* IMAGES */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
