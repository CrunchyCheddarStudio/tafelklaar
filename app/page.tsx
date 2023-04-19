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
        {/* HEADER */}
        <div className="bg-gradient-to-r to-[#3766df] from-[#41517e] p-2">
          {/* SEARCHBAR */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded mr-3 p-2 w-[450px] bg-white text-black border-blue-400 border-2"
              type="text"
              placeholder="Provincie, Stad of Restaurant"
            />
            <button className="bg-red-600 px-9 py-2 rounded">Zoek nu</button>
          </div>
          {/* SEARCHBAR */}
        </div>
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="text-black mb-2">Regio</h1>
              <p className="font-light text-reg text-black">Hulste</p>
              <p className="font-light text-reg text-black">Kortrijk</p>
              <p className="font-light text-reg text-black">Brugge</p>
              <p className="font-light text-reg text-black">Antwerpen</p>
              <p className="font-light text-reg text-black">Gent</p>
              <p className="font-light text-reg text-black">Sint-Niklaas</p>
              <p className="font-light text-reg text-black">Heule</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="text-black mb-2">Keuken</h1>
              <p className="font-light text-reg text-black">Mexicaans</p>
              <p className="font-light text-reg text-black">Frans</p>
              <p className="font-light text-reg text-black">Chinees</p>
            </div>
          </div>
        </div>
        {/* HEADER */}
      </main>
    </main>
  );
}
